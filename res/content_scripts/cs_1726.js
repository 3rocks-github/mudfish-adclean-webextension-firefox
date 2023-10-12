
function mudfish_adclean_1d4e58d69f073c28cd2eebaa2041a3b1() {
  try {
    Sizzle(`.commu-content div[style].sh-wrap`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1d4e58d69f073c28cd2eebaa2041a3b1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1d4e58d69f073c28cd2eebaa2041a3b1, function (items) {
  if (mudfish_adclean_g_conf_1d4e58d69f073c28cd2eebaa2041a3b1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1d4e58d69f073c28cd2eebaa2041a3b1();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
