
function mudfish_adclean_e398a9cc373d2727ea6eab8cf56d7e52() {
  try {
    Sizzle(`div[style].fancybox-type-inline`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e398a9cc373d2727ea6eab8cf56d7e52 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e398a9cc373d2727ea6eab8cf56d7e52, function (items) {
  if (mudfish_adclean_g_conf_e398a9cc373d2727ea6eab8cf56d7e52.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e398a9cc373d2727ea6eab8cf56d7e52();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e398a9cc373d2727ea6eab8cf56d7e52();
    });
  }
});
