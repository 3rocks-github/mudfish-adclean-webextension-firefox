
function mudfish_adclean_cd2809e598afce0835e00264d58e38d0() {
  try {
    Sizzle(`div[class]:has(> ins.adsbygoogle)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cd2809e598afce0835e00264d58e38d0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cd2809e598afce0835e00264d58e38d0, function (items) {
  if (mudfish_adclean_g_conf_cd2809e598afce0835e00264d58e38d0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cd2809e598afce0835e00264d58e38d0();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_cd2809e598afce0835e00264d58e38d0();
    });
  }
});
