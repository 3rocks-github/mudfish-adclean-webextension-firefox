
function mudfish_adclean_a02bdd35d0e469b3eecc605d144eb110() {
  try {
    Sizzle(`.group-deal .list > div:has(span.ad:matches-css(background-image: /images\/deal\/ad\.png/))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a02bdd35d0e469b3eecc605d144eb110 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a02bdd35d0e469b3eecc605d144eb110, function (items) {
  if (mudfish_adclean_g_conf_a02bdd35d0e469b3eecc605d144eb110.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a02bdd35d0e469b3eecc605d144eb110();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
