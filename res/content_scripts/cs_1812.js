
function mudfish_adclean_fdeb7b20e8140dea850c5932ff60d337() {
  try {
    Sizzle(`#container #main_five_fixbnr ul.five_fixbnr_list`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fdeb7b20e8140dea850c5932ff60d337 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fdeb7b20e8140dea850c5932ff60d337, function (items) {
  if (mudfish_adclean_g_conf_fdeb7b20e8140dea850c5932ff60d337.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fdeb7b20e8140dea850c5932ff60d337();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_fdeb7b20e8140dea850c5932ff60d337();
    });
  }
});
