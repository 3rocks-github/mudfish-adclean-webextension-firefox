
function mudfish_adclean_f59e615bbec56a5b806801d70480d3ce() {
  try {
    Sizzle(`.power_box div[class^="asset"]:has(iframe[src*="//adv.zdnet.co.kr/"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f59e615bbec56a5b806801d70480d3ce = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f59e615bbec56a5b806801d70480d3ce, function (items) {
  if (mudfish_adclean_g_conf_f59e615bbec56a5b806801d70480d3ce.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f59e615bbec56a5b806801d70480d3ce();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
