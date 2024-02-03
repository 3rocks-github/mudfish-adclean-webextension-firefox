
function mudfish_adclean_c3b73c627b12a247e211185e3478485d() {
  try {
    Sizzle(`aside > div[class*=" "][id][style] > div[id][class]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c3b73c627b12a247e211185e3478485d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c3b73c627b12a247e211185e3478485d, function (items) {
  if (mudfish_adclean_g_conf_c3b73c627b12a247e211185e3478485d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c3b73c627b12a247e211185e3478485d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c3b73c627b12a247e211185e3478485d();
    });
  }
});
