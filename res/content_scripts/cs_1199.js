
function mudfish_adclean_70b77133eb504b09a6775485661b72b5() {
  try {
    Sizzle(`#plusPrdArea`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_70b77133eb504b09a6775485661b72b5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_70b77133eb504b09a6775485661b72b5, function (items) {
  if (mudfish_adclean_g_conf_70b77133eb504b09a6775485661b72b5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_70b77133eb504b09a6775485661b72b5();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_70b77133eb504b09a6775485661b72b5();
    });
  }
});
