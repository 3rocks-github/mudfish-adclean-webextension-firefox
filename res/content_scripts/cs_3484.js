
function mudfish_adclean_bcf496e63ca26198d4cb0065e3b2764a() {
  try {
    Sizzle(`.banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bcf496e63ca26198d4cb0065e3b2764a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bcf496e63ca26198d4cb0065e3b2764a, function (items) {
  if (mudfish_adclean_g_conf_bcf496e63ca26198d4cb0065e3b2764a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bcf496e63ca26198d4cb0065e3b2764a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_bcf496e63ca26198d4cb0065e3b2764a();
    });
  }
});
