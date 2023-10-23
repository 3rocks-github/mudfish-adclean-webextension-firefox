
function mudfish_adclean_936c79e533a70715a0bc37142d2d31a3() {
  try {
    Sizzle(`.td-ss-main-sidebar > .td-a-rec`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_936c79e533a70715a0bc37142d2d31a3 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_936c79e533a70715a0bc37142d2d31a3, function (items) {
  if (mudfish_adclean_g_conf_936c79e533a70715a0bc37142d2d31a3.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_936c79e533a70715a0bc37142d2d31a3();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_936c79e533a70715a0bc37142d2d31a3();
    });
  }
});
