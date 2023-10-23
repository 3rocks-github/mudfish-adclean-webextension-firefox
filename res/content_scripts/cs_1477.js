
function mudfish_adclean_703e1ac78a81f2671e160412c96a56d1() {
  try {
    Sizzle(`.article > aside[data-position]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_703e1ac78a81f2671e160412c96a56d1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_703e1ac78a81f2671e160412c96a56d1, function (items) {
  if (mudfish_adclean_g_conf_703e1ac78a81f2671e160412c96a56d1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_703e1ac78a81f2671e160412c96a56d1();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_703e1ac78a81f2671e160412c96a56d1();
    });
  }
});
