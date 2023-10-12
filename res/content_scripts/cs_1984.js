
function mudfish_adclean_498a5429dcd04b7d8431b7a816959c90() {
  try {
    Sizzle(`div[class~="arcad-wrapper"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_498a5429dcd04b7d8431b7a816959c90 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_498a5429dcd04b7d8431b7a816959c90, function (items) {
  if (mudfish_adclean_g_conf_498a5429dcd04b7d8431b7a816959c90.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_498a5429dcd04b7d8431b7a816959c90();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
