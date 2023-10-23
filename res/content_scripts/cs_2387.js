
function mudfish_adclean_1c1df339b6f540ea4156b14c795ef538() {
  try {
    Sizzle(`div[class^="Layout-module__content_area_"]:has(> div[class*="_banner_"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1c1df339b6f540ea4156b14c795ef538 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1c1df339b6f540ea4156b14c795ef538, function (items) {
  if (mudfish_adclean_g_conf_1c1df339b6f540ea4156b14c795ef538.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1c1df339b6f540ea4156b14c795ef538();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_1c1df339b6f540ea4156b14c795ef538();
    });
  }
});
