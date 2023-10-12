
function mudfish_adclean_16a4b7b4daa1eb80eb506a2953ae22a9() {
  try {
    Sizzle(`div[id^="ads"][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_16a4b7b4daa1eb80eb506a2953ae22a9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_16a4b7b4daa1eb80eb506a2953ae22a9, function (items) {
  if (mudfish_adclean_g_conf_16a4b7b4daa1eb80eb506a2953ae22a9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_16a4b7b4daa1eb80eb506a2953ae22a9();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
