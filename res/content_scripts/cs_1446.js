
function mudfish_adclean_ccc95e00d0427468295d511f8fd495dc() {
  try {
    Sizzle(`.component--chance_shopping`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ccc95e00d0427468295d511f8fd495dc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ccc95e00d0427468295d511f8fd495dc, function (items) {
  if (mudfish_adclean_g_conf_ccc95e00d0427468295d511f8fd495dc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ccc95e00d0427468295d511f8fd495dc();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ccc95e00d0427468295d511f8fd495dc();
    });
  }
});
