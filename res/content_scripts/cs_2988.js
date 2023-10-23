
function mudfish_adclean_dd0c37219ad55422a9b5c6e49a6ccf83() {
  try {
    Sizzle(`#container > div[class^="content"] > section[id^="detailHotnews"] ~  aside[class^="aside-box"][class$="bg11"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_dd0c37219ad55422a9b5c6e49a6ccf83 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_dd0c37219ad55422a9b5c6e49a6ccf83, function (items) {
  if (mudfish_adclean_g_conf_dd0c37219ad55422a9b5c6e49a6ccf83.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_dd0c37219ad55422a9b5c6e49a6ccf83();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_dd0c37219ad55422a9b5c6e49a6ccf83();
    });
  }
});
