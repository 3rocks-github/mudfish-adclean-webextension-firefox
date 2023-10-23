
function mudfish_adclean_607a4c0263042114d1a674bb7d79cfc8() {
  try {
    Sizzle(`a[href*="/ad/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_607a4c0263042114d1a674bb7d79cfc8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_607a4c0263042114d1a674bb7d79cfc8, function (items) {
  if (mudfish_adclean_g_conf_607a4c0263042114d1a674bb7d79cfc8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_607a4c0263042114d1a674bb7d79cfc8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_607a4c0263042114d1a674bb7d79cfc8();
    });
  }
});
