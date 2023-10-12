
function mudfish_adclean_f60d441264c387c0eb55c40aaf01d23f() {
  try {
    Sizzle(`div[class$="AD"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f60d441264c387c0eb55c40aaf01d23f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f60d441264c387c0eb55c40aaf01d23f, function (items) {
  if (mudfish_adclean_g_conf_f60d441264c387c0eb55c40aaf01d23f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f60d441264c387c0eb55c40aaf01d23f();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
