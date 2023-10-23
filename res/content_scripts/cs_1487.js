
function mudfish_adclean_4a1607a8a03fc7a2166953b8d32c3a43() {
  try {
    Sizzle(`div[style] > div[class^="arl_"] ~ hr.skin_margin`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4a1607a8a03fc7a2166953b8d32c3a43 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4a1607a8a03fc7a2166953b8d32c3a43, function (items) {
  if (mudfish_adclean_g_conf_4a1607a8a03fc7a2166953b8d32c3a43.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4a1607a8a03fc7a2166953b8d32c3a43();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_4a1607a8a03fc7a2166953b8d32c3a43();
    });
  }
});
