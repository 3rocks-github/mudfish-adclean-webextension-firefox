
function mudfish_adclean_10d1eac8c400329e65677dd0b7de5ee5() {
  try {
    Sizzle(`.tdn-inventory`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_10d1eac8c400329e65677dd0b7de5ee5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_10d1eac8c400329e65677dd0b7de5ee5, function (items) {
  if (mudfish_adclean_g_conf_10d1eac8c400329e65677dd0b7de5ee5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_10d1eac8c400329e65677dd0b7de5ee5();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_10d1eac8c400329e65677dd0b7de5ee5();
    });
  }
});
