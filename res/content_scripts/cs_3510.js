
function mudfish_adclean_936d7160d1c96711b5f98ae6b474eab4() {
  try {
    Sizzle(`div[id$="Ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_936d7160d1c96711b5f98ae6b474eab4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_936d7160d1c96711b5f98ae6b474eab4, function (items) {
  if (mudfish_adclean_g_conf_936d7160d1c96711b5f98ae6b474eab4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_936d7160d1c96711b5f98ae6b474eab4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_936d7160d1c96711b5f98ae6b474eab4();
    });
  }
});
