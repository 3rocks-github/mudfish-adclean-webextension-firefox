
function mudfish_adclean_b5c7e71b5cb466b5c514d28243690755() {
  try {
    Sizzle(`.td-pb-span4.td-main-sidebar`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b5c7e71b5cb466b5c514d28243690755 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b5c7e71b5cb466b5c514d28243690755, function (items) {
  if (mudfish_adclean_g_conf_b5c7e71b5cb466b5c514d28243690755.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b5c7e71b5cb466b5c514d28243690755();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
