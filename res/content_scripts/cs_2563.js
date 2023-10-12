
function mudfish_adclean_2b536dc2715bfddc0bc970da1da3d8f5() {
  try {
    Sizzle(`.section-intro > .m-latest-renew:has(h3:contains(오늘의 책))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2b536dc2715bfddc0bc970da1da3d8f5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2b536dc2715bfddc0bc970da1da3d8f5, function (items) {
  if (mudfish_adclean_g_conf_2b536dc2715bfddc0bc970da1da3d8f5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2b536dc2715bfddc0bc970da1da3d8f5();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
