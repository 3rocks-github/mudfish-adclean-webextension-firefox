
function mudfish_adclean_ced5da5d34c204d10e405f9457c1b558() {
  try {
    Sizzle(`div[id^="ad_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ced5da5d34c204d10e405f9457c1b558 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ced5da5d34c204d10e405f9457c1b558, function (items) {
  if (mudfish_adclean_g_conf_ced5da5d34c204d10e405f9457c1b558.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ced5da5d34c204d10e405f9457c1b558();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ced5da5d34c204d10e405f9457c1b558();
    });
  }
});
