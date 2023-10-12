
function mudfish_adclean_bae4f4d4e02bca38b8c3d18c88b073c7() {
  try {
    Sizzle(`#levbar_info ~ .container ~ div[style^="height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bae4f4d4e02bca38b8c3d18c88b073c7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bae4f4d4e02bca38b8c3d18c88b073c7, function (items) {
  if (mudfish_adclean_g_conf_bae4f4d4e02bca38b8c3d18c88b073c7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bae4f4d4e02bca38b8c3d18c88b073c7();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
