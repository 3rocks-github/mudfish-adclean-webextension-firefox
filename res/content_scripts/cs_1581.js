
function mudfish_adclean_a0ffce6cacb949f3cf22bc5b3de37b48() {
  try {
    Sizzle(`div[itemprop="articleBody"] ~ div[style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a0ffce6cacb949f3cf22bc5b3de37b48 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a0ffce6cacb949f3cf22bc5b3de37b48, function (items) {
  if (mudfish_adclean_g_conf_a0ffce6cacb949f3cf22bc5b3de37b48.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a0ffce6cacb949f3cf22bc5b3de37b48();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
