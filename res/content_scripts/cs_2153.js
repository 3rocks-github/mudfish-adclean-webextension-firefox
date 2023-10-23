
function mudfish_adclean_86882add2e6603e6ccf853701b2e0810() {
  try {
    Sizzle(`.sidebar[style] > aside[id^="text-"][class] ~ aside[id^="text-"][class]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_86882add2e6603e6ccf853701b2e0810 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_86882add2e6603e6ccf853701b2e0810, function (items) {
  if (mudfish_adclean_g_conf_86882add2e6603e6ccf853701b2e0810.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_86882add2e6603e6ccf853701b2e0810();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_86882add2e6603e6ccf853701b2e0810();
    });
  }
});
