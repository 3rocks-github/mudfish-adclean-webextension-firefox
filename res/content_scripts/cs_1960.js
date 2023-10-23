
function mudfish_adclean_a0c46ee3654f7651c2e861d1852b2fce() {
  try {
    Sizzle(`iframe[src^="/inc_banner/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a0c46ee3654f7651c2e861d1852b2fce = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a0c46ee3654f7651c2e861d1852b2fce, function (items) {
  if (mudfish_adclean_g_conf_a0c46ee3654f7651c2e861d1852b2fce.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a0c46ee3654f7651c2e861d1852b2fce();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a0c46ee3654f7651c2e861d1852b2fce();
    });
  }
});
