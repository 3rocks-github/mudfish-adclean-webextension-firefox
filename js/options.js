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
    mudfish_adclean_filter_on: true
};

function notify_hide() {
    var elm = document.querySelector("#saved_box");
    elm.style.display = 'none';
}

function notify(msg) {
    var elm = document.querySelector("#saved_box");
    elm.style.display = 'block';
    window.setTimeout(notify_hide, 200);
}

function apply_options() {
    if (g_conf.mudfish_adclean_filter_on) {
        let options = { enableRulesetIds: [ "mudfish_adclean_rule_resource_network" ]};
        chrome.declarativeNetRequest.updateEnabledRulesets(options, () => {
            console.log("[INFO] updated to enable the filter.");
        });
    } else {
        let options = { disableRulesetIds: [ "mudfish_adclean_rule_resource_network" ]};
        chrome.declarativeNetRequest.updateEnabledRulesets(options, () => {
            console.log("[INFO] updated to disable the filter.");
        });
    }
}

function save_options() {
    var elm = document.querySelector("input[name=filter_enable][value='on']");
    if (elm.checked == true) {
        g_conf.mudfish_adclean_filter_on = true;
    } else {
        g_conf.mudfish_adclean_filter_on = false;
    }
    apply_options();
    chrome.storage.local.set(g_conf);
    notify(chrome.i18n.getMessage("i18n_saved"));
}

function restore_options() {
    chrome.storage.local.get(g_conf, function (items) {
        g_conf = items;
        if (g_conf.mudfish_adclean_filter_on) {
            var elm = document.querySelector("input[name=filter_enable][value='on']");
            elm.checked = true;
        } else {
            var elm = document.querySelector("input[name=filter_enable][value='off']");
            elm.checked = true;
        }
    });
}

function handle_options() {
    restore_options();
    document.querySelectorAll("input[name=filter_enable]").forEach((elm) => {
        elm.addEventListener("click", function () {
            save_options();
        });
    });
}

function i18n_attr(msgid, name, attr) {
    var m;

    m = chrome.i18n.getMessage(msgid);
    document.querySelectorAll("#" + name).forEach(elm => {
        elm.setAttribute(attr, m);
    });
}

function i18n_id(name) {
    var m;

    m = chrome.i18n.getMessage(name);
    document.querySelectorAll("#" + name).forEach(elm => {
        elm.innerText = m;
    });
}

function i18n() {
    i18n_id("i18n_document");
    i18n_id("i18n_enable_filter");
    i18n_id("i18n_enable_filter_description");
    i18n_id("i18n_general");
    i18n_id("i18n_off");
    i18n_id("i18n_on");
    i18n_id("i18n_options_html_title");
}

(() => {
    i18n();
    handle_options();
})();
