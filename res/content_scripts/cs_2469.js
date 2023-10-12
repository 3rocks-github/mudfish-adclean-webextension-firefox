
function mudfish_adclean_e3c2e734f2c4bf9e35dd378bf322722a() {
  try {
    Sizzle(`.wcms_bestnews ~ div[class]:has(~ div[class] ~ .side_major_company)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e3c2e734f2c4bf9e35dd378bf322722a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e3c2e734f2c4bf9e35dd378bf322722a, function (items) {
  if (mudfish_adclean_g_conf_e3c2e734f2c4bf9e35dd378bf322722a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e3c2e734f2c4bf9e35dd378bf322722a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
