
function mudfish_adclean_f0c9eec7aaf75aebd8035e5de96a6097() {
  try {
    Sizzle(`#mbnRoll_001 > .mbnRollUnit > .pagen_6`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f0c9eec7aaf75aebd8035e5de96a6097 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f0c9eec7aaf75aebd8035e5de96a6097, function (items) {
  if (mudfish_adclean_g_conf_f0c9eec7aaf75aebd8035e5de96a6097.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f0c9eec7aaf75aebd8035e5de96a6097();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f0c9eec7aaf75aebd8035e5de96a6097();
    });
  }
});
