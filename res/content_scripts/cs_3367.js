
function mudfish_adclean_a80b7e4eb347900135baa300b2620a83() {
  try {
    Sizzle(`body > div[style^="height:"][style*="width:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a80b7e4eb347900135baa300b2620a83 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a80b7e4eb347900135baa300b2620a83, function (items) {
  if (mudfish_adclean_g_conf_a80b7e4eb347900135baa300b2620a83.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a80b7e4eb347900135baa300b2620a83();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
