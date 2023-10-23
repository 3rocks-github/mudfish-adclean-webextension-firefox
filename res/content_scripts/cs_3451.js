
function mudfish_adclean_e6c86c8763f3e3769f41b75ae0f3bee6() {
  try {
    Sizzle(`#SmartPhone_bullpen_today .lists > li:before`).forEach(element => {
      element.style.paddingTop = "0px !important";
element.style.borderBottom = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e6c86c8763f3e3769f41b75ae0f3bee6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e6c86c8763f3e3769f41b75ae0f3bee6, function (items) {
  if (mudfish_adclean_g_conf_e6c86c8763f3e3769f41b75ae0f3bee6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e6c86c8763f3e3769f41b75ae0f3bee6();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e6c86c8763f3e3769f41b75ae0f3bee6();
    });
  }
});
