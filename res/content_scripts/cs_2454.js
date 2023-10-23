
function mudfish_adclean_a4cc7e2a541311e6d4856189d3ef10e8() {
  try {
    Sizzle(`.main_center .line_deco_bottom:has(div[class^="ad_"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a4cc7e2a541311e6d4856189d3ef10e8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a4cc7e2a541311e6d4856189d3ef10e8, function (items) {
  if (mudfish_adclean_g_conf_a4cc7e2a541311e6d4856189d3ef10e8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a4cc7e2a541311e6d4856189d3ef10e8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a4cc7e2a541311e6d4856189d3ef10e8();
    });
  }
});
