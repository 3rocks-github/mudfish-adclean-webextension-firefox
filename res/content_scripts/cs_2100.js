
function mudfish_adclean_763e20213f2b3149237ba6c2daa664ae() {
  try {
    Sizzle(`div[class^="header-banner-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_763e20213f2b3149237ba6c2daa664ae = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_763e20213f2b3149237ba6c2daa664ae, function (items) {
  if (mudfish_adclean_g_conf_763e20213f2b3149237ba6c2daa664ae.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_763e20213f2b3149237ba6c2daa664ae();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_763e20213f2b3149237ba6c2daa664ae();
    });
  }
});
