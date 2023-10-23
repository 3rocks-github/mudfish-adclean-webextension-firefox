
function mudfish_adclean_9ef95513242c6f5c696c0391bd10f557() {
  try {
    Sizzle(`.productDetailInfo ~ div[style*=" "].emptyComponent`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9ef95513242c6f5c696c0391bd10f557 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9ef95513242c6f5c696c0391bd10f557, function (items) {
  if (mudfish_adclean_g_conf_9ef95513242c6f5c696c0391bd10f557.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9ef95513242c6f5c696c0391bd10f557();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9ef95513242c6f5c696c0391bd10f557();
    });
  }
});
