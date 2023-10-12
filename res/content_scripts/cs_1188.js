
function mudfish_adclean_7803ba7e24c7e87d117a605f34b9fdc1() {
  try {
    Sizzle(`section[id*="_ads_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7803ba7e24c7e87d117a605f34b9fdc1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7803ba7e24c7e87d117a605f34b9fdc1, function (items) {
  if (mudfish_adclean_g_conf_7803ba7e24c7e87d117a605f34b9fdc1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7803ba7e24c7e87d117a605f34b9fdc1();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
