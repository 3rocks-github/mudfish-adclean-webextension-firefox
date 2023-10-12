
function mudfish_adclean_4f5001489cf801a10d6a63818ab8bc03() {
  try {
    Sizzle(`.side-ad-box`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4f5001489cf801a10d6a63818ab8bc03 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4f5001489cf801a10d6a63818ab8bc03, function (items) {
  if (mudfish_adclean_g_conf_4f5001489cf801a10d6a63818ab8bc03.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4f5001489cf801a10d6a63818ab8bc03();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
