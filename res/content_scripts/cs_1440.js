
function mudfish_adclean_3e3c24e2c6e1e0b31d988d22cbf25233() {
  try {
    Sizzle(`.cate-search-result > #powerPlus`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3e3c24e2c6e1e0b31d988d22cbf25233 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3e3c24e2c6e1e0b31d988d22cbf25233, function (items) {
  if (mudfish_adclean_g_conf_3e3c24e2c6e1e0b31d988d22cbf25233.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3e3c24e2c6e1e0b31d988d22cbf25233();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_3e3c24e2c6e1e0b31d988d22cbf25233();
    });
  }
});
