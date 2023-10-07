/*-
 * Copyright (c) 2023 Weongyo Jeong <weongyo@3rocks.net>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
 * OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 * LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 * OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGE.
 */

var g_conf = {
    mudfish_adclean_filter_on: true,
    mudfish_adclean_rules_generation: -1,
    mudfish_adclean_rules_generation_epoch: -1,
    mudfish_adclean_rules_generation_timestr: '',
};

function apply_options() {
    if (g_conf.mudfish_adclean_filter_on) {
        let options = { enableRulesetIds: [ "mudfish_adclean_rule_resource_network" ]};
        chrome.declarativeNetRequest.updateEnabledRulesets(options, () => {
            console.log("[INFO] Enabled the filter ruleset.");
        });
    } else {
        let options = { disableRulesetIds: [ "mudfish_adclean_rule_resource_network" ]};
        chrome.declarativeNetRequest.updateEnabledRulesets(options, () => {
            console.log("[INFO] Disabled the filter ruleset.");
        });
    }
}

function rules_update_delete_rule_ids(delete_rule_ids) {
    options = {
        removeRuleIds: delete_rule_ids,
    };
    chrome.declarativeNetRequest.updateSessionRules(options).then(() => {
        console.log(`[INFO] Deleted the rule IDs from the session rules.`);
    }).catch(err => {
        console.log(`[ERROR] Failed to delete the rule IDs from the session rules: ${delete_rule_ids} ${err}`);
    });
}

function rules_update_insert_rules(insert_rule_ids, insert_rules) {
    chrome.declarativeNetRequest.getSessionRules({
        ruleIds: insert_rule_ids
    }).then((rules) => {
        var new_insert_rules = [];
        for (var insert_rule of insert_rules) {
            var found = false;
            for (var rule of rules) {
                if (rule.id === insert_rule.id) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                continue;
            }
            new_insert_rules.push(insert_rule);
        }
        let options = {
            addRules: new_insert_rules,
        };
        chrome.declarativeNetRequest.updateSessionRules(options).then(() => {
            console.log(`[INFO] Updated the session rules.`);
        }).catch(err => {
            console.log(`[ERROR] Failed to update the session rules: ${insert_rules} ${err}`);
        });
    }).catch(err => {
        console.log(`[ERROR] Failed to get the session rules: ${err}`);
        return;
    });
}

function rules_update() {
    var url = "https://adclean.mudfish.net/api/rules";
    var body = {
        rules_generation: g_conf.mudfish_adclean_rules_generation
    };
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }).then(async function(resp) {
        var data = await resp.json();
        if (data.status != 200) {
            console.log("[ERROR] Failed to fetch the updated rules.");
            return;
        }
        var delete_rule_ids = [];
        var insert_rule_ids = [];
        var insert_rules = [];
        var last_generation = -1;
        var last_generation_epoch = -1;
        var n_ignored_cosmetic_rules = 0;
        for (var binlog of data.binlogs) {
            if (binlog.binlog_format != 1) {
                console.log("[WARN] Unsupported binlog format.");
                continue;
            }
            var obj = JSON.parse(binlog.binlog_msg);
            if (obj.type == 'delete') {
                delete_rule_ids.push(obj.msg.rule_id);
            } else if (obj.type == 'insert') {
                var msg = obj.msg;
                if (msg.raw_type == 'network') {
                    var rule = {
                        id: msg.rule_id,
                        priority: msg.priority,
                        action: msg.action,
                        condition: msg.condition
                    };
                    insert_rule_ids.push(msg.rule_id);
                    insert_rules.push(rule);
                } else if (msg.raw_type == 'cosmetic') {
                    n_ignored_cosmetic_rules += 1;
                } else {
                    console.log(`[WARN] Unexpected raw_type: ${msg.raw_type}`);
                }
            } else {
                console.log("[ERROR] Unexpected message type");
            }
            last_generation = binlog.generation;
            last_generation_epoch = binlog.generation_epoch;
        }
        if (delete_rule_ids.length > 0) {
            rules_update_delete_rule_ids(delete_rule_ids);
        }
        if (insert_rules.length > 0) {
            rules_update_insert_rules(insert_rule_ids, insert_rules);
        }
        if (last_generation !== -1 && last_generation_epoch !== -1) {
            g_conf.mudfish_adclean_rules_generation = last_generation;
            g_conf.mudfish_adclean_rules_generation_epoch = last_generation_epoch;
            g_conf.mudfish_adclean_rules_generation_timestr = new Date(last_generation_epoch * 1000);
            chrome.storage.local.set(g_conf);
        }
        if (n_ignored_cosmetic_rules > 0) {
            console.log(`[WARN] ${n_ignored_cosmetic_rules} cosmetic rules are ignored.`);
        }
    }).catch(function(error) {
        console.log(error);
    });
}

function rules_info() {
    var url = chrome.runtime.getURL('/res/rules.json');
    fetch(url).then(async function(resp) {
        var data = await resp.json();
        if (g_conf.mudfish_adclean_rules_generation == -1 ||
            g_conf.mudfish_adclean_rules_generation < data.generation) {
            g_conf.mudfish_adclean_rules_generation = data.generation;
            g_conf.mudfish_adclean_rules_generation_epoch = data.generation_epoch;
            g_conf.mudfish_adclean_rules_generation_timestr = data.generation_timestr;
            chrome.storage.local.set(g_conf);
        }
        rules_update();
    });
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    /* do nothing at this point. */
});

chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason == "install") {
        console.log("[INFO] This is a first install!");
    } else if (details.reason == "update") {
        var thisVersion = chrome.runtime.getManifest().version;
        if (details.previousVersion === thisVersion) {
            return;
        }
        console.log("[INFO] Updated from " + details.previousVersion + " to " + thisVersion + "!");
    }
});

chrome.runtime.onUpdateAvailable.addListener(function(details) {
    console.log("the update is available.");
    console.log(details);
});

(() => {
    chrome.storage.local.get(g_conf, function (items) {
        g_conf = items;
        apply_options();
        rules_info();
    });
})();
