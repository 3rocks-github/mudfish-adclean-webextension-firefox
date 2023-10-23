
function mudfish_adclean_25cdb1091d1aaef7b5cd2ccf5924dfa7() {
  try {
    Sizzle(`.coupang-box`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_25cdb1091d1aaef7b5cd2ccf5924dfa7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_25cdb1091d1aaef7b5cd2ccf5924dfa7, function (items) {
  if (mudfish_adclean_g_conf_25cdb1091d1aaef7b5cd2ccf5924dfa7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_25cdb1091d1aaef7b5cd2ccf5924dfa7();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_25cdb1091d1aaef7b5cd2ccf5924dfa7();
    });
  }
});
