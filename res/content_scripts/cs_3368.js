
function mudfish_adclean_7547ec1bc4b2df8d9606d1f2f92c8d48() {
  try {
    Sizzle(`#wrap > div[style*="height:"][style^="position:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7547ec1bc4b2df8d9606d1f2f92c8d48 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7547ec1bc4b2df8d9606d1f2f92c8d48, function (items) {
  if (mudfish_adclean_g_conf_7547ec1bc4b2df8d9606d1f2f92c8d48.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7547ec1bc4b2df8d9606d1f2f92c8d48();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7547ec1bc4b2df8d9606d1f2f92c8d48();
    });
  }
});
