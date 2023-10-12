
function mudfish_adclean_4badbbe0728bad7c03dead2ed1b8a18e() {
  try {
    Sizzle(`div[class^="css-"]:has(> ins.adsbygoogle)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4badbbe0728bad7c03dead2ed1b8a18e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4badbbe0728bad7c03dead2ed1b8a18e, function (items) {
  if (mudfish_adclean_g_conf_4badbbe0728bad7c03dead2ed1b8a18e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4badbbe0728bad7c03dead2ed1b8a18e();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
