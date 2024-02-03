
function mudfish_adclean_64676c32da2955d8332092152b749ab5() {
  try {
    Sizzle(`div[id][class*=" "][data-interval] div[style*="/data/apms/background"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_64676c32da2955d8332092152b749ab5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_64676c32da2955d8332092152b749ab5, function (items) {
  if (mudfish_adclean_g_conf_64676c32da2955d8332092152b749ab5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_64676c32da2955d8332092152b749ab5();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_64676c32da2955d8332092152b749ab5();
    });
  }
});
