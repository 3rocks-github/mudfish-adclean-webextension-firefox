
function mudfish_adclean_6f0b72cbb0488d9e047aed218b5c5184() {
  try {
    Sizzle(`div[class^="ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6f0b72cbb0488d9e047aed218b5c5184 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6f0b72cbb0488d9e047aed218b5c5184, function (items) {
  if (mudfish_adclean_g_conf_6f0b72cbb0488d9e047aed218b5c5184.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6f0b72cbb0488d9e047aed218b5c5184();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
