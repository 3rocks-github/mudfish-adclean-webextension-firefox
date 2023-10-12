
function mudfish_adclean_e781f056c6a86365fc528e9620b9c457() {
  try {
    Sizzle(`#container_c .tbl tr td[style*="solid"] div[style^="height"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e781f056c6a86365fc528e9620b9c457 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e781f056c6a86365fc528e9620b9c457, function (items) {
  if (mudfish_adclean_g_conf_e781f056c6a86365fc528e9620b9c457.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e781f056c6a86365fc528e9620b9c457();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
