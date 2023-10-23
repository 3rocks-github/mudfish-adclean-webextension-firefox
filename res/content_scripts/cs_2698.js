
function mudfish_adclean_13e944ff65a43b24bef3986b3620c80f() {
  try {
    Sizzle(`#newsBody`).forEach(element => {
      element.style.height = "auto !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_13e944ff65a43b24bef3986b3620c80f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_13e944ff65a43b24bef3986b3620c80f, function (items) {
  if (mudfish_adclean_g_conf_13e944ff65a43b24bef3986b3620c80f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_13e944ff65a43b24bef3986b3620c80f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_13e944ff65a43b24bef3986b3620c80f();
    });
  }
});
