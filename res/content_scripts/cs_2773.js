
function mudfish_adclean_3734a2a2803716e1f5a1e503b8ed7172() {
  try {
    Sizzle(`.main_right > .youtube-container`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3734a2a2803716e1f5a1e503b8ed7172 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3734a2a2803716e1f5a1e503b8ed7172, function (items) {
  if (mudfish_adclean_g_conf_3734a2a2803716e1f5a1e503b8ed7172.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3734a2a2803716e1f5a1e503b8ed7172();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_3734a2a2803716e1f5a1e503b8ed7172();
    });
  }
});
