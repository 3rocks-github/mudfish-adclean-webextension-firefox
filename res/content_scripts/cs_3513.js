
function mudfish_adclean_94955ca6ed343d513e91945010629f19() {
  try {
    Sizzle(`a[class^="ad_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_94955ca6ed343d513e91945010629f19 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_94955ca6ed343d513e91945010629f19, function (items) {
  if (mudfish_adclean_g_conf_94955ca6ed343d513e91945010629f19.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_94955ca6ed343d513e91945010629f19();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_94955ca6ed343d513e91945010629f19();
    });
  }
});
