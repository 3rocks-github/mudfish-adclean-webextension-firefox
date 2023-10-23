
function mudfish_adclean_2accdb5dcbe84b35508a4630a1f453bb() {
  try {
    Sizzle(`.add_display`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2accdb5dcbe84b35508a4630a1f453bb = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2accdb5dcbe84b35508a4630a1f453bb, function (items) {
  if (mudfish_adclean_g_conf_2accdb5dcbe84b35508a4630a1f453bb.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2accdb5dcbe84b35508a4630a1f453bb();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2accdb5dcbe84b35508a4630a1f453bb();
    });
  }
});
