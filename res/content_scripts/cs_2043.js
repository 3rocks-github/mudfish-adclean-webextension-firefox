
function mudfish_adclean_7aac1020379985c14eefc09799b37151() {
  try {
    Sizzle(`ul.list_column > li.item_ad`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7aac1020379985c14eefc09799b37151 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7aac1020379985c14eefc09799b37151, function (items) {
  if (mudfish_adclean_g_conf_7aac1020379985c14eefc09799b37151.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7aac1020379985c14eefc09799b37151();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7aac1020379985c14eefc09799b37151();
    });
  }
});
