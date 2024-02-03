
function mudfish_adclean_bafea021fbc6115c9ba7cf7810cec86f() {
  try {
    Sizzle(`#body_text > .at-main.at-col[style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bafea021fbc6115c9ba7cf7810cec86f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bafea021fbc6115c9ba7cf7810cec86f, function (items) {
  if (mudfish_adclean_g_conf_bafea021fbc6115c9ba7cf7810cec86f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bafea021fbc6115c9ba7cf7810cec86f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_bafea021fbc6115c9ba7cf7810cec86f();
    });
  }
});
