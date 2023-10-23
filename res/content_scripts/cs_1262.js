
function mudfish_adclean_64ff4f644bc5ffd881554d028e1f463d() {
  try {
    Sizzle(`div[style~="padding:10px"][style~="10px;"] > div[style^="height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_64ff4f644bc5ffd881554d028e1f463d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_64ff4f644bc5ffd881554d028e1f463d, function (items) {
  if (mudfish_adclean_g_conf_64ff4f644bc5ffd881554d028e1f463d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_64ff4f644bc5ffd881554d028e1f463d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_64ff4f644bc5ffd881554d028e1f463d();
    });
  }
});
