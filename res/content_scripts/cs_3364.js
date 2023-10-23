
function mudfish_adclean_e4120c8d19e68a2d531cb440e2cd36f3() {
  try {
    Sizzle(`div[class$="-banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e4120c8d19e68a2d531cb440e2cd36f3 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e4120c8d19e68a2d531cb440e2cd36f3, function (items) {
  if (mudfish_adclean_g_conf_e4120c8d19e68a2d531cb440e2cd36f3.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e4120c8d19e68a2d531cb440e2cd36f3();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e4120c8d19e68a2d531cb440e2cd36f3();
    });
  }
});
