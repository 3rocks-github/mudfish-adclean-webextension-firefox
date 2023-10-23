
function mudfish_adclean_44ccc227253534a006ee1049d666bb57() {
  try {
    Sizzle(`.mod-top > .main-promo`).forEach(element => {
      element.style.marginLeft = "calc(50% - 205px) !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_44ccc227253534a006ee1049d666bb57 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_44ccc227253534a006ee1049d666bb57, function (items) {
  if (mudfish_adclean_g_conf_44ccc227253534a006ee1049d666bb57.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_44ccc227253534a006ee1049d666bb57();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_44ccc227253534a006ee1049d666bb57();
    });
  }
});
