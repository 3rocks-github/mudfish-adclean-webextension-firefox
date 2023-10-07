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

function add_listeners() {
    let button = document.querySelector("#report_blocking_problem_button");
    button.addEventListener("click", (event) => {
        window.location = "/html/report_blocking_problem.html";
    });
    button = document.querySelector("#adclean_options");
    button.addEventListener("click", (event) => {
        if (chrome.runtime.openOptionsPage) {
            chrome.runtime.openOptionsPage();
        } else {
            window.open(chrome.runtime.getURL('/html/options.html'));
        }
    });
}

function apply_options() {
    chrome.storage.local.get(g_conf, function (items) {
        g_conf = items;
        let span = document.querySelector("#rules_generation_epoch");
        span.innerText = new Date(g_conf.mudfish_adclean_rules_generation_epoch * 1000).toLocaleDateString();
    });
}

function i18n_attr(msgid, name, attr) {
    var m;

    m = chrome.i18n.getMessage(msgid);
    let elm = document.querySelector("#" + name);
    if (elm === null || elm === undefined) {
        return;
    }
    elm.setAttribute(attr, m);
}

function i18n_id(name) {
    var m;

    m = chrome.i18n.getMessage(name);
    let elm = document.querySelector("#" + name);
    if (elm === null || elm === undefined) {
        return;
    }
    elm.innerText = m;
}

function i18n() {
    i18n_attr("i18n_manifest_name", "popup_connect_homepage", "title");
    i18n_attr("i18n_setup", "adclean_options", "title");
    i18n_id("i18n_filter_date");
    i18n_id("i18n_manifest_name");
    i18n_id("i18n_no_ad_block_working");
    i18n_id("i18n_off");
    i18n_id("i18n_on");
    i18n_id("i18n_report");
    i18n_id("i18n_status");
}

function update_adclean_version() {
    var manifest = chrome.runtime.getManifest();
    document.querySelector("#adclean_version").innerText = manifest.version;
}

(() => {
    update_adclean_version();
    i18n();
    add_listeners();
    apply_options();
})();
