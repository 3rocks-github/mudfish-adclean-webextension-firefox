
function mudfish_adclean_5aede9e9f17e6594f8ca7a9f0825d7fe() {
  try {
    Sizzle(`body > div[style]:not([class]):not([id])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5aede9e9f17e6594f8ca7a9f0825d7fe = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5aede9e9f17e6594f8ca7a9f0825d7fe, function (items) {
  if (mudfish_adclean_g_conf_5aede9e9f17e6594f8ca7a9f0825d7fe.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5aede9e9f17e6594f8ca7a9f0825d7fe();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5aede9e9f17e6594f8ca7a9f0825d7fe();
    });
  }
});
