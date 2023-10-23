
function mudfish_adclean_e676aef2b196ccf974f383a1ded56bb8() {
  try {
    Sizzle(`div[class^="powercont_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e676aef2b196ccf974f383a1ded56bb8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e676aef2b196ccf974f383a1ded56bb8, function (items) {
  if (mudfish_adclean_g_conf_e676aef2b196ccf974f383a1ded56bb8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e676aef2b196ccf974f383a1ded56bb8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e676aef2b196ccf974f383a1ded56bb8();
    });
  }
});
