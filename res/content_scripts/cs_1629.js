
function mudfish_adclean_e7bf2ffef4c6624aa97fcca7380f4f50() {
  try {
    Sizzle(`div[data-use-adzerk][id$="-banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e7bf2ffef4c6624aa97fcca7380f4f50 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e7bf2ffef4c6624aa97fcca7380f4f50, function (items) {
  if (mudfish_adclean_g_conf_e7bf2ffef4c6624aa97fcca7380f4f50.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e7bf2ffef4c6624aa97fcca7380f4f50();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e7bf2ffef4c6624aa97fcca7380f4f50();
    });
  }
});
