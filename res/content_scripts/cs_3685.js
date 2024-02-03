
function mudfish_adclean_dcb9a17c0edc0e21c1b78d1654c9b7ea() {
  try {
    Sizzle(`div[class^="shoppingHomeResponsive_inner"] div[class^="shoppingHomeResponsive_module__"]:has(> .trend_pick)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_dcb9a17c0edc0e21c1b78d1654c9b7ea = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_dcb9a17c0edc0e21c1b78d1654c9b7ea, function (items) {
  if (mudfish_adclean_g_conf_dcb9a17c0edc0e21c1b78d1654c9b7ea.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_dcb9a17c0edc0e21c1b78d1654c9b7ea();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_dcb9a17c0edc0e21c1b78d1654c9b7ea();
    });
  }
});
