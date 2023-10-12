
function mudfish_adclean_e17f2f506a30f6b40d692a618070ecf7() {
  try {
    Sizzle(`div[id^="wjdqh"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e17f2f506a30f6b40d692a618070ecf7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e17f2f506a30f6b40d692a618070ecf7, function (items) {
  if (mudfish_adclean_g_conf_e17f2f506a30f6b40d692a618070ecf7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e17f2f506a30f6b40d692a618070ecf7();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
