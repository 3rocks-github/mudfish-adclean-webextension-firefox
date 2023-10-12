
function mudfish_adclean_cd6a7fe4933bed9e121661ce9d2d9319() {
  try {
    Sizzle(`tbody > tr:has(> td > img[src*="/img/adland01.gif"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cd6a7fe4933bed9e121661ce9d2d9319 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cd6a7fe4933bed9e121661ce9d2d9319, function (items) {
  if (mudfish_adclean_g_conf_cd6a7fe4933bed9e121661ce9d2d9319.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cd6a7fe4933bed9e121661ce9d2d9319();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
