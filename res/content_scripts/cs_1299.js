
function mudfish_adclean_f342517313d4f3af1a733324fd4c77f2() {
  try {
    Sizzle(`.main > .main_visual`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f342517313d4f3af1a733324fd4c77f2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f342517313d4f3af1a733324fd4c77f2, function (items) {
  if (mudfish_adclean_g_conf_f342517313d4f3af1a733324fd4c77f2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f342517313d4f3af1a733324fd4c77f2();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
