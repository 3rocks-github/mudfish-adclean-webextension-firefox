
function mudfish_adclean_bc6f6f5f9b624bd0b3757bc16c3605d7() {
  try {
    Sizzle(`div[style~="!important;"] > .nw_box > div:not(class):not(id) > table[cellspacing="0"][class]:not(:has(a[href*="//gigglehd.com/gg/"]))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bc6f6f5f9b624bd0b3757bc16c3605d7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bc6f6f5f9b624bd0b3757bc16c3605d7, function (items) {
  if (mudfish_adclean_g_conf_bc6f6f5f9b624bd0b3757bc16c3605d7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bc6f6f5f9b624bd0b3757bc16c3605d7();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_bc6f6f5f9b624bd0b3757bc16c3605d7();
    });
  }
});
