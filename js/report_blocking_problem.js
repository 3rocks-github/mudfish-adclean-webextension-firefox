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

var g_report_url = '';

function add_listeners() {
    let button = document.querySelector("#submit");
    button.addEventListener("click", (event) => {
        let report_url = document.querySelector("#report_url");
        let report_body = document.querySelector("#report_body");
        let report_body_value = report_body.value.trim();
        if (report_body_value.length == 0) {
            submit_result.innerText = chrome.i18n.getMessage("i18n_describe_shortly");
            return;
        }
        var manifest = chrome.runtime.getManifest();
        axios.post("https://adclean.mudfish.net/api/requests", {
            url: report_url.getAttribute("title"),
            body: report_body.value,
            version: manifest.version
        }).then(response => {
            let data = response.data;
            let submit_result = document.querySelector("#submit_result");
            if (data.status == 200) {
                submit_result.innerText = data.msg;
            } else {
                submit_result.innerText = data.msg;
            }
        }).catch(error => {
          submit_result.innerText = chrome.i18n.getMessage("i18n_internal_error");
          console.log("[ERROR] Failed to submit.");
        });
    });
}

function update_report_url() {
    chrome.tabs.query({active: true, currentWindow: true}, async function(tabs) {
        var curr_tab = tabs[0];
        if (curr_tab) { 
            let report_url = document.querySelector("#report_url");
            report_url.setAttribute("title", curr_tab.url);
            if (curr_tab.url.length > 15) {
                report_url.innerText = curr_tab.url.substring(0, 15) + '...';
            } else {
                report_url.innerText = curr_tab.url;
            }
            g_report_url = curr_tab.url;
        }
    });
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
    i18n_id("i18n_describe");
    i18n_id("i18n_loading_dotdotdot");
    i18n_id("i18n_report");
    i18n_id("i18n_report_blocking_problem");
}

(() => {
    i18n();
    update_report_url();
    add_listeners();
})();
