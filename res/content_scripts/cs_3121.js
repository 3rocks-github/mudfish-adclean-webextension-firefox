
function mudfish_adclean_4a91e0ff553ed824a1374a4282073501() {
  try {
    Sizzle(`table[border="0"] > tbody > tr > td:not(td > div:not(div.noresize) + b > a:not([target="_blank"]))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4a91e0ff553ed824a1374a4282073501 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4a91e0ff553ed824a1374a4282073501, function (items) {
  if (mudfish_adclean_g_conf_4a91e0ff553ed824a1374a4282073501.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4a91e0ff553ed824a1374a4282073501();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_4a91e0ff553ed824a1374a4282073501();
    });
  }
});
