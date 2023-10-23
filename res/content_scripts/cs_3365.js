
function mudfish_adclean_cf1e6481fde233c77a3f88e200695612() {
  try {
    Sizzle(`.SubInforDiv_article table ~ div[style^="padding:"][align="center"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cf1e6481fde233c77a3f88e200695612 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cf1e6481fde233c77a3f88e200695612, function (items) {
  if (mudfish_adclean_g_conf_cf1e6481fde233c77a3f88e200695612.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cf1e6481fde233c77a3f88e200695612();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_cf1e6481fde233c77a3f88e200695612();
    });
  }
});
