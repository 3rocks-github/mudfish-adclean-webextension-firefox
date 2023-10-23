
function mudfish_adclean_a39cb5c6f391810299e7fe397fd4ab02() {
  try {
    Sizzle(`#menufoot > .hot_under`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a39cb5c6f391810299e7fe397fd4ab02 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a39cb5c6f391810299e7fe397fd4ab02, function (items) {
  if (mudfish_adclean_g_conf_a39cb5c6f391810299e7fe397fd4ab02.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a39cb5c6f391810299e7fe397fd4ab02();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a39cb5c6f391810299e7fe397fd4ab02();
    });
  }
});
