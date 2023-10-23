
function mudfish_adclean_896d74f5d0b2770dc538508518499ae8() {
  try {
    Sizzle(`table[width="1200"]:has(> tbody > tr > td > div[class*="slider-banner-"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_896d74f5d0b2770dc538508518499ae8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_896d74f5d0b2770dc538508518499ae8, function (items) {
  if (mudfish_adclean_g_conf_896d74f5d0b2770dc538508518499ae8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_896d74f5d0b2770dc538508518499ae8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_896d74f5d0b2770dc538508518499ae8();
    });
  }
});
