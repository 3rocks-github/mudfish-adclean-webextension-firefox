
function mudfish_adclean_a4e561b9948cbe18809520857774d65d() {
  try {
    Sizzle(`.ContentsWrap section[style*="height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a4e561b9948cbe18809520857774d65d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a4e561b9948cbe18809520857774d65d, function (items) {
  if (mudfish_adclean_g_conf_a4e561b9948cbe18809520857774d65d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a4e561b9948cbe18809520857774d65d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a4e561b9948cbe18809520857774d65d();
    });
  }
});
