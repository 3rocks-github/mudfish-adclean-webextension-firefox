
function mudfish_adclean_2a7df1c29f208d0c10933760e1cdec53() {
  try {
    Sizzle(`.entry-content > div[style*="height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2a7df1c29f208d0c10933760e1cdec53 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2a7df1c29f208d0c10933760e1cdec53, function (items) {
  if (mudfish_adclean_g_conf_2a7df1c29f208d0c10933760e1cdec53.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2a7df1c29f208d0c10933760e1cdec53();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2a7df1c29f208d0c10933760e1cdec53();
    });
  }
});
