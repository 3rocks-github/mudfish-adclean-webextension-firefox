
function mudfish_adclean_47c13d595e32d2162e8b6550ae542189() {
  try {
    Sizzle(`a[href*="/ad/"][target="_blank"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_47c13d595e32d2162e8b6550ae542189 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_47c13d595e32d2162e8b6550ae542189, function (items) {
  if (mudfish_adclean_g_conf_47c13d595e32d2162e8b6550ae542189.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_47c13d595e32d2162e8b6550ae542189();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_47c13d595e32d2162e8b6550ae542189();
    });
  }
});
