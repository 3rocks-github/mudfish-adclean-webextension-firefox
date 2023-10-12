
function mudfish_adclean_6f7a50065892e76ee64ef6bf8326ebae() {
  try {
    Sizzle(`.adLinkColl`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6f7a50065892e76ee64ef6bf8326ebae = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6f7a50065892e76ee64ef6bf8326ebae, function (items) {
  if (mudfish_adclean_g_conf_6f7a50065892e76ee64ef6bf8326ebae.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6f7a50065892e76ee64ef6bf8326ebae();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
