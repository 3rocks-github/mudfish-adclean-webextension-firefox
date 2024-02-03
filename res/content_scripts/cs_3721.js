
function mudfish_adclean_161123529091dc3d6a4b772a9557f69c() {
  try {
    Sizzle(`*[class^="adv-group"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_161123529091dc3d6a4b772a9557f69c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_161123529091dc3d6a4b772a9557f69c, function (items) {
  if (mudfish_adclean_g_conf_161123529091dc3d6a4b772a9557f69c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_161123529091dc3d6a4b772a9557f69c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_161123529091dc3d6a4b772a9557f69c();
    });
  }
});
