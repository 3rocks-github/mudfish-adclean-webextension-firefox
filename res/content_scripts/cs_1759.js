
function mudfish_adclean_1dfc2995965b8b815f92f5cfb1891872() {
  try {
    Sizzle(`.main__grid.main__grid--line .main__grid__right`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1dfc2995965b8b815f92f5cfb1891872 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1dfc2995965b8b815f92f5cfb1891872, function (items) {
  if (mudfish_adclean_g_conf_1dfc2995965b8b815f92f5cfb1891872.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1dfc2995965b8b815f92f5cfb1891872();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
