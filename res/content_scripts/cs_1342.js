
function mudfish_adclean_afd3f2154a0a05388c165641c723fc08() {
  try {
    Sizzle(`#_contents div[data-container="bigBanner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_afd3f2154a0a05388c165641c723fc08 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_afd3f2154a0a05388c165641c723fc08, function (items) {
  if (mudfish_adclean_g_conf_afd3f2154a0a05388c165641c723fc08.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_afd3f2154a0a05388c165641c723fc08();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
