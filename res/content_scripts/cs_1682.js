
function mudfish_adclean_5758021987d4d915f7189ab21343229e() {
  try {
    Sizzle(`.vm-placement`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5758021987d4d915f7189ab21343229e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5758021987d4d915f7189ab21343229e, function (items) {
  if (mudfish_adclean_g_conf_5758021987d4d915f7189ab21343229e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5758021987d4d915f7189ab21343229e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5758021987d4d915f7189ab21343229e();
    });
  }
});
