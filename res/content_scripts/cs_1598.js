
function mudfish_adclean_5bebe16f1f73f6b372098552ee16ab30() {
  try {
    Sizzle(`.wkbn_bk.tp`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5bebe16f1f73f6b372098552ee16ab30 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5bebe16f1f73f6b372098552ee16ab30, function (items) {
  if (mudfish_adclean_g_conf_5bebe16f1f73f6b372098552ee16ab30.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5bebe16f1f73f6b372098552ee16ab30();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5bebe16f1f73f6b372098552ee16ab30();
    });
  }
});
