
function mudfish_adclean_2e25ecdfca19c5429ebb5a13b2ad30b1() {
  try {
    Sizzle(`table[width][border] td:not([width]):has(div[align="CENTER"] > .adsbygoogle, td[bgcolor] a[href*="//link.coupang.com/"] > img)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2e25ecdfca19c5429ebb5a13b2ad30b1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2e25ecdfca19c5429ebb5a13b2ad30b1, function (items) {
  if (mudfish_adclean_g_conf_2e25ecdfca19c5429ebb5a13b2ad30b1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2e25ecdfca19c5429ebb5a13b2ad30b1();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2e25ecdfca19c5429ebb5a13b2ad30b1();
    });
  }
});
