
function mudfish_adclean_804d60f88c4a1fec96af14b90ee14e7f() {
  try {
    Sizzle(`div[class^="bann_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_804d60f88c4a1fec96af14b90ee14e7f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_804d60f88c4a1fec96af14b90ee14e7f, function (items) {
  if (mudfish_adclean_g_conf_804d60f88c4a1fec96af14b90ee14e7f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_804d60f88c4a1fec96af14b90ee14e7f();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
