
function mudfish_adclean_e63dc852fd3cabb8f76b359917d8dbf0() {
  try {
    Sizzle(`div[id$="AdCon"][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e63dc852fd3cabb8f76b359917d8dbf0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e63dc852fd3cabb8f76b359917d8dbf0, function (items) {
  if (mudfish_adclean_g_conf_e63dc852fd3cabb8f76b359917d8dbf0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e63dc852fd3cabb8f76b359917d8dbf0();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e63dc852fd3cabb8f76b359917d8dbf0();
    });
  }
});
