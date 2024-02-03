
function mudfish_adclean_78d55dd1a3e3c0e5ebf5ba453b5ca090() {
  try {
    Sizzle(`body > #pbt:has(.pbtadblock)`).forEach(element => {
      element.style.display = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_78d55dd1a3e3c0e5ebf5ba453b5ca090 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_78d55dd1a3e3c0e5ebf5ba453b5ca090, function (items) {
  if (mudfish_adclean_g_conf_78d55dd1a3e3c0e5ebf5ba453b5ca090.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_78d55dd1a3e3c0e5ebf5ba453b5ca090();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_78d55dd1a3e3c0e5ebf5ba453b5ca090();
    });
  }
});
