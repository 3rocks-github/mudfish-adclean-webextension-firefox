
function mudfish_adclean_4b545c5e12c9759b57089a12e7dabd44() {
  try {
    Sizzle(`div[id$="_bn_area"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4b545c5e12c9759b57089a12e7dabd44 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4b545c5e12c9759b57089a12e7dabd44, function (items) {
  if (mudfish_adclean_g_conf_4b545c5e12c9759b57089a12e7dabd44.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4b545c5e12c9759b57089a12e7dabd44();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_4b545c5e12c9759b57089a12e7dabd44();
    });
  }
});
