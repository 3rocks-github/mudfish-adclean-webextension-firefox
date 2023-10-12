
function mudfish_adclean_b4afedcde7360f2731989e44359ab97b() {
  try {
    Sizzle(`.main-evn > .main-visual`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b4afedcde7360f2731989e44359ab97b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b4afedcde7360f2731989e44359ab97b, function (items) {
  if (mudfish_adclean_g_conf_b4afedcde7360f2731989e44359ab97b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b4afedcde7360f2731989e44359ab97b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
