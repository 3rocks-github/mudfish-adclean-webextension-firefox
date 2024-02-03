
function mudfish_adclean_a61e798fb1193a501b45eb25117516b3() {
  try {
    Sizzle(`a[class^="banner_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a61e798fb1193a501b45eb25117516b3 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a61e798fb1193a501b45eb25117516b3, function (items) {
  if (mudfish_adclean_g_conf_a61e798fb1193a501b45eb25117516b3.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a61e798fb1193a501b45eb25117516b3();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a61e798fb1193a501b45eb25117516b3();
    });
  }
});
