
function mudfish_adclean_334b2218ad90ddc142968df2f7aa064e() {
  try {
    Sizzle(`#container > div[style*="margin-bottom:"]:has(img[src*="/data/file/ad"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_334b2218ad90ddc142968df2f7aa064e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_334b2218ad90ddc142968df2f7aa064e, function (items) {
  if (mudfish_adclean_g_conf_334b2218ad90ddc142968df2f7aa064e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_334b2218ad90ddc142968df2f7aa064e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_334b2218ad90ddc142968df2f7aa064e();
    });
  }
});
