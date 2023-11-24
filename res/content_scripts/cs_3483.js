
function mudfish_adclean_b64994ebd676b6434146869fb94a8ebb() {
  try {
    Sizzle(`div[class^="ad-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b64994ebd676b6434146869fb94a8ebb = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b64994ebd676b6434146869fb94a8ebb, function (items) {
  if (mudfish_adclean_g_conf_b64994ebd676b6434146869fb94a8ebb.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b64994ebd676b6434146869fb94a8ebb();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b64994ebd676b6434146869fb94a8ebb();
    });
  }
});
