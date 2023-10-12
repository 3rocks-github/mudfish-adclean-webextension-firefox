
function mudfish_adclean_55d95b8187c9856a4357c69fb17addf8() {
  try {
    Sizzle(`div[id^="Aside"][id$="Event"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_55d95b8187c9856a4357c69fb17addf8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_55d95b8187c9856a4357c69fb17addf8, function (items) {
  if (mudfish_adclean_g_conf_55d95b8187c9856a4357c69fb17addf8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_55d95b8187c9856a4357c69fb17addf8();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
