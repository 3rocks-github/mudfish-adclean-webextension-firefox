
function mudfish_adclean_643bae9681155bfe1352649dba7a2c8d() {
  try {
    Sizzle(`table[bgcolor][cellspacing] td[bgcolor] table[width][cellspacing]:not([bgcolor]):has(tr marquee#innovationGA)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_643bae9681155bfe1352649dba7a2c8d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_643bae9681155bfe1352649dba7a2c8d, function (items) {
  if (mudfish_adclean_g_conf_643bae9681155bfe1352649dba7a2c8d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_643bae9681155bfe1352649dba7a2c8d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
