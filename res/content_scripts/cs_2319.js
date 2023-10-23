
function mudfish_adclean_e8563a992c4e256880520da9597fd3c8() {
  try {
    Sizzle(`.byWd .matchingContWrap`).forEach(element => {
      element.style.marginTop = "0px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e8563a992c4e256880520da9597fd3c8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e8563a992c4e256880520da9597fd3c8, function (items) {
  if (mudfish_adclean_g_conf_e8563a992c4e256880520da9597fd3c8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e8563a992c4e256880520da9597fd3c8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e8563a992c4e256880520da9597fd3c8();
    });
  }
});
