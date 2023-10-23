
function mudfish_adclean_e35e5a96c310a47d58a2dc729a3445ed() {
  try {
    Sizzle(`div[style~="background-image:"][style*=".cuonet.com/data/apms/background/"].item`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e35e5a96c310a47d58a2dc729a3445ed = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e35e5a96c310a47d58a2dc729a3445ed, function (items) {
  if (mudfish_adclean_g_conf_e35e5a96c310a47d58a2dc729a3445ed.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e35e5a96c310a47d58a2dc729a3445ed();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e35e5a96c310a47d58a2dc729a3445ed();
    });
  }
});
