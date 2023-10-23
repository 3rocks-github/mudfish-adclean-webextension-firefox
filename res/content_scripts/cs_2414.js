
function mudfish_adclean_e7af45820e9e72d3b0bf9c07e8a71a10() {
  try {
    Sizzle(`.app-board-section tr:has(ins.adsbygoogle)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e7af45820e9e72d3b0bf9c07e8a71a10 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e7af45820e9e72d3b0bf9c07e8a71a10, function (items) {
  if (mudfish_adclean_g_conf_e7af45820e9e72d3b0bf9c07e8a71a10.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e7af45820e9e72d3b0bf9c07e8a71a10();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e7af45820e9e72d3b0bf9c07e8a71a10();
    });
  }
});
