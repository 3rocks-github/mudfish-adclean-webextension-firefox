
function mudfish_adclean_74c1224e1b78a82b1a56819b6cc8efc8() {
  try {
    Sizzle(`[class$="-advert"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_74c1224e1b78a82b1a56819b6cc8efc8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_74c1224e1b78a82b1a56819b6cc8efc8, function (items) {
  if (mudfish_adclean_g_conf_74c1224e1b78a82b1a56819b6cc8efc8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_74c1224e1b78a82b1a56819b6cc8efc8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_74c1224e1b78a82b1a56819b6cc8efc8();
    });
  }
});
