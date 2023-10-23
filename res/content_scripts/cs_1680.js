
function mudfish_adclean_477908aed0d9a3dd8bcb1db7ce69152b() {
  try {
    Sizzle(`.eq.section div[class^="col-md-"] > center`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_477908aed0d9a3dd8bcb1db7ce69152b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_477908aed0d9a3dd8bcb1db7ce69152b, function (items) {
  if (mudfish_adclean_g_conf_477908aed0d9a3dd8bcb1db7ce69152b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_477908aed0d9a3dd8bcb1db7ce69152b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_477908aed0d9a3dd8bcb1db7ce69152b();
    });
  }
});
