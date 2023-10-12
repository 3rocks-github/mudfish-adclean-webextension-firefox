
function mudfish_adclean_1f6950649c3a502fd60c270ddd63d9cd() {
  try {
    Sizzle(`.inside-right-sidebar > aside[id^="custom_html-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1f6950649c3a502fd60c270ddd63d9cd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1f6950649c3a502fd60c270ddd63d9cd, function (items) {
  if (mudfish_adclean_g_conf_1f6950649c3a502fd60c270ddd63d9cd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1f6950649c3a502fd60c270ddd63d9cd();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
