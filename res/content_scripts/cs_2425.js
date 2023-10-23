
function mudfish_adclean_c3d714c903774682a51ed06e42b428e4() {
  try {
    Sizzle(`div[id^="shortcodes-ultimate-"]:has(div[id^="block-"][class^="block-content-"][style])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c3d714c903774682a51ed06e42b428e4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c3d714c903774682a51ed06e42b428e4, function (items) {
  if (mudfish_adclean_g_conf_c3d714c903774682a51ed06e42b428e4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c3d714c903774682a51ed06e42b428e4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c3d714c903774682a51ed06e42b428e4();
    });
  }
});
