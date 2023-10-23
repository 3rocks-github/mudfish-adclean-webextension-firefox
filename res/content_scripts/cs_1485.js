
function mudfish_adclean_e0072f972b4d7de5ef1f4605c18944b2() {
  try {
    Sizzle(`div[style] > div[class^="ban_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e0072f972b4d7de5ef1f4605c18944b2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e0072f972b4d7de5ef1f4605c18944b2, function (items) {
  if (mudfish_adclean_g_conf_e0072f972b4d7de5ef1f4605c18944b2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e0072f972b4d7de5ef1f4605c18944b2();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e0072f972b4d7de5ef1f4605c18944b2();
    });
  }
});
