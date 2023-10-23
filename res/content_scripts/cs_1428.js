
function mudfish_adclean_3642649de21182dc2d341f20569d9818() {
  try {
    Sizzle(`section[class^="banner-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3642649de21182dc2d341f20569d9818 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3642649de21182dc2d341f20569d9818, function (items) {
  if (mudfish_adclean_g_conf_3642649de21182dc2d341f20569d9818.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3642649de21182dc2d341f20569d9818();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_3642649de21182dc2d341f20569d9818();
    });
  }
});
