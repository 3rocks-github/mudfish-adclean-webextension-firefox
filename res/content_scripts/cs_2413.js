
function mudfish_adclean_0015febf3060e08962263d94193f3aa7() {
  try {
    Sizzle(`#sidebar-wrapper div[id^="HTML"]:has(ins.adsbygoogle)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0015febf3060e08962263d94193f3aa7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0015febf3060e08962263d94193f3aa7, function (items) {
  if (mudfish_adclean_g_conf_0015febf3060e08962263d94193f3aa7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0015febf3060e08962263d94193f3aa7();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
