
function mudfish_adclean_ee57883f4b845d48cb0f311f331436ad() {
  try {
    Sizzle(`div[class*="ad_"][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ee57883f4b845d48cb0f311f331436ad = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ee57883f4b845d48cb0f311f331436ad, function (items) {
  if (mudfish_adclean_g_conf_ee57883f4b845d48cb0f311f331436ad.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ee57883f4b845d48cb0f311f331436ad();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
