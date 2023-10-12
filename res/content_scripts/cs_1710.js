
function mudfish_adclean_2f60f5423181f20dc054567d05d5ccbc() {
  try {
    Sizzle(`iframe[src^="/view/ad/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2f60f5423181f20dc054567d05d5ccbc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2f60f5423181f20dc054567d05d5ccbc, function (items) {
  if (mudfish_adclean_g_conf_2f60f5423181f20dc054567d05d5ccbc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2f60f5423181f20dc054567d05d5ccbc();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
