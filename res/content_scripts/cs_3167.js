
function mudfish_adclean_a188879bbc9c44c7e74b7bb896c3bfcd() {
  try {
    Sizzle(`.banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a188879bbc9c44c7e74b7bb896c3bfcd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a188879bbc9c44c7e74b7bb896c3bfcd, function (items) {
  if (mudfish_adclean_g_conf_a188879bbc9c44c7e74b7bb896c3bfcd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a188879bbc9c44c7e74b7bb896c3bfcd();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a188879bbc9c44c7e74b7bb896c3bfcd();
    });
  }
});
