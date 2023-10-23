
function mudfish_adclean_996d8a9e54d1b00c775e563e110908e3() {
  try {
    Sizzle(`div[style] > a[onclick*="_banner("]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_996d8a9e54d1b00c775e563e110908e3 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_996d8a9e54d1b00c775e563e110908e3, function (items) {
  if (mudfish_adclean_g_conf_996d8a9e54d1b00c775e563e110908e3.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_996d8a9e54d1b00c775e563e110908e3();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_996d8a9e54d1b00c775e563e110908e3();
    });
  }
});
