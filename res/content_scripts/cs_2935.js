
function mudfish_adclean_d951561e0f0bae343070f42e655af912() {
  try {
    Sizzle(`div[class^="banner_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d951561e0f0bae343070f42e655af912 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d951561e0f0bae343070f42e655af912, function (items) {
  if (mudfish_adclean_g_conf_d951561e0f0bae343070f42e655af912.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d951561e0f0bae343070f42e655af912();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_d951561e0f0bae343070f42e655af912();
    });
  }
});
