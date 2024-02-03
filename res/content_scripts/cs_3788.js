
function mudfish_adclean_cf85c759d7681e2272f3c4b9ae43fcb4() {
  try {
    Sizzle(`div[class*="-banner"] div[class*=" "][style=" "]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cf85c759d7681e2272f3c4b9ae43fcb4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cf85c759d7681e2272f3c4b9ae43fcb4, function (items) {
  if (mudfish_adclean_g_conf_cf85c759d7681e2272f3c4b9ae43fcb4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cf85c759d7681e2272f3c4b9ae43fcb4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_cf85c759d7681e2272f3c4b9ae43fcb4();
    });
  }
});
