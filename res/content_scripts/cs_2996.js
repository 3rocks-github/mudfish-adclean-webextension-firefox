
function mudfish_adclean_9e5ff465ceca86561125c60c5a0a9d70() {
  try {
    Sizzle(`#welcomeTodayPop > section[id^="section"][id$="Pop"][style^="display:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9e5ff465ceca86561125c60c5a0a9d70 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9e5ff465ceca86561125c60c5a0a9d70, function (items) {
  if (mudfish_adclean_g_conf_9e5ff465ceca86561125c60c5a0a9d70.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9e5ff465ceca86561125c60c5a0a9d70();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9e5ff465ceca86561125c60c5a0a9d70();
    });
  }
});
