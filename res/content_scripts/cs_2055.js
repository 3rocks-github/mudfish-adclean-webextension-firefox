
function mudfish_adclean_068f5599b9579917ea144aa0185cd931() {
  try {
    Sizzle(`div[id^="wingBanner-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_068f5599b9579917ea144aa0185cd931 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_068f5599b9579917ea144aa0185cd931, function (items) {
  if (mudfish_adclean_g_conf_068f5599b9579917ea144aa0185cd931.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_068f5599b9579917ea144aa0185cd931();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
