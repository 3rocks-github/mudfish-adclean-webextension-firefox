
function mudfish_adclean_13e3168218ff1b8eeb8177ecec1a9303() {
  try {
    Sizzle(`div[class^="power_link_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_13e3168218ff1b8eeb8177ecec1a9303 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_13e3168218ff1b8eeb8177ecec1a9303, function (items) {
  if (mudfish_adclean_g_conf_13e3168218ff1b8eeb8177ecec1a9303.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_13e3168218ff1b8eeb8177ecec1a9303();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_13e3168218ff1b8eeb8177ecec1a9303();
    });
  }
});
