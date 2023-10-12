
function mudfish_adclean_70576bf8ca38aef44c0edea6736b41fc() {
  try {
    Sizzle(`div[class^="col-md-"] div:is([style^="width:"], [style^="min-width:"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_70576bf8ca38aef44c0edea6736b41fc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_70576bf8ca38aef44c0edea6736b41fc, function (items) {
  if (mudfish_adclean_g_conf_70576bf8ca38aef44c0edea6736b41fc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_70576bf8ca38aef44c0edea6736b41fc();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
