
function mudfish_adclean_9a16d52e7126351243e47d31bd5e492f() {
  try {
    Sizzle(`table[width] table[width] td[width][height]:has(a[target="_blank"] img[alt="배너광고안내"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9a16d52e7126351243e47d31bd5e492f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9a16d52e7126351243e47d31bd5e492f, function (items) {
  if (mudfish_adclean_g_conf_9a16d52e7126351243e47d31bd5e492f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9a16d52e7126351243e47d31bd5e492f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9a16d52e7126351243e47d31bd5e492f();
    });
  }
});
