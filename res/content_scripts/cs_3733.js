
function mudfish_adclean_3dbfd48540a7aaacb842ab7ce4ce4f67() {
  try {
    Sizzle(`#rich-media-placement ~ div[style*="height:"][style*="padding-top:"][style*="padding-bottom:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3dbfd48540a7aaacb842ab7ce4ce4f67 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3dbfd48540a7aaacb842ab7ce4ce4f67, function (items) {
  if (mudfish_adclean_g_conf_3dbfd48540a7aaacb842ab7ce4ce4f67.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3dbfd48540a7aaacb842ab7ce4ce4f67();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_3dbfd48540a7aaacb842ab7ce4ce4f67();
    });
  }
});
