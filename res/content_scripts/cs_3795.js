
function mudfish_adclean_cdc0782dd87fad314df72e38ca9543c9() {
  try {
    Sizzle(`.banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cdc0782dd87fad314df72e38ca9543c9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cdc0782dd87fad314df72e38ca9543c9, function (items) {
  if (mudfish_adclean_g_conf_cdc0782dd87fad314df72e38ca9543c9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cdc0782dd87fad314df72e38ca9543c9();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_cdc0782dd87fad314df72e38ca9543c9();
    });
  }
});
