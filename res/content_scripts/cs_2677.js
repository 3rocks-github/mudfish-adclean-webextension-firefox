
function mudfish_adclean_64b6aeb11acea4490e8862ad6910613d() {
  try {
    Sizzle(`#sidebar_container .relative:has([class*="_ad_"]) ~ div[class^="spacer"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_64b6aeb11acea4490e8862ad6910613d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_64b6aeb11acea4490e8862ad6910613d, function (items) {
  if (mudfish_adclean_g_conf_64b6aeb11acea4490e8862ad6910613d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_64b6aeb11acea4490e8862ad6910613d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_64b6aeb11acea4490e8862ad6910613d();
    });
  }
});
