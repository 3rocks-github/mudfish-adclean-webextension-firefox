
function mudfish_adclean_2a68c97c1f385e07049f437a45a09991() {
  try {
    Sizzle(`div[class^="adsense_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2a68c97c1f385e07049f437a45a09991 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2a68c97c1f385e07049f437a45a09991, function (items) {
  if (mudfish_adclean_g_conf_2a68c97c1f385e07049f437a45a09991.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2a68c97c1f385e07049f437a45a09991();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2a68c97c1f385e07049f437a45a09991();
    });
  }
});
