
function mudfish_adclean_696c91658f2efb6af0565a2d08ace7c7() {
  try {
    Sizzle(`#content  > .mainBanner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_696c91658f2efb6af0565a2d08ace7c7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_696c91658f2efb6af0565a2d08ace7c7, function (items) {
  if (mudfish_adclean_g_conf_696c91658f2efb6af0565a2d08ace7c7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_696c91658f2efb6af0565a2d08ace7c7();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_696c91658f2efb6af0565a2d08ace7c7();
    });
  }
});
