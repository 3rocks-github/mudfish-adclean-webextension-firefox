
function mudfish_adclean_f22230db54577778aa11c39d88ac7a8a() {
  try {
    Sizzle(`#yHeader .yesSearch .key_latest .lastest_word`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f22230db54577778aa11c39d88ac7a8a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f22230db54577778aa11c39d88ac7a8a, function (items) {
  if (mudfish_adclean_g_conf_f22230db54577778aa11c39d88ac7a8a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f22230db54577778aa11c39d88ac7a8a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f22230db54577778aa11c39d88ac7a8a();
    });
  }
});
