
function mudfish_adclean_3f95ae4557ad02e56e53da53c8f9d249() {
  try {
    Sizzle(`.ezmob-footer`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3f95ae4557ad02e56e53da53c8f9d249 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3f95ae4557ad02e56e53da53c8f9d249, function (items) {
  if (mudfish_adclean_g_conf_3f95ae4557ad02e56e53da53c8f9d249.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3f95ae4557ad02e56e53da53c8f9d249();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_3f95ae4557ad02e56e53da53c8f9d249();
    });
  }
});
