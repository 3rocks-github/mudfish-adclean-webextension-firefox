
function mudfish_adclean_cd62188df7e734a3bbad32d769ecb53a() {
  try {
    Sizzle(`div[class$="con_b"]:has(> *:matches-css(display: none))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cd62188df7e734a3bbad32d769ecb53a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cd62188df7e734a3bbad32d769ecb53a, function (items) {
  if (mudfish_adclean_g_conf_cd62188df7e734a3bbad32d769ecb53a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cd62188df7e734a3bbad32d769ecb53a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
