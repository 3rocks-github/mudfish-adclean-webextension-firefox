
function mudfish_adclean_5cf102a75d139d595300934707b4231d() {
  try {
    Sizzle(`aside.user-aside > article.box-skin + .box-margins:not(.box-solid-x) ~ div[class]:has(~ article)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5cf102a75d139d595300934707b4231d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5cf102a75d139d595300934707b4231d, function (items) {
  if (mudfish_adclean_g_conf_5cf102a75d139d595300934707b4231d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5cf102a75d139d595300934707b4231d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5cf102a75d139d595300934707b4231d();
    });
  }
});
