
function mudfish_adclean_0b8cb0869d68600cf4a69954117540b4() {
  try {
    Sizzle(`body > div[style]:not([class]):not([id])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0b8cb0869d68600cf4a69954117540b4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0b8cb0869d68600cf4a69954117540b4, function (items) {
  if (mudfish_adclean_g_conf_0b8cb0869d68600cf4a69954117540b4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0b8cb0869d68600cf4a69954117540b4();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
