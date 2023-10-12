
function mudfish_adclean_db373b5b2ecfee34afbeced81088ef0b() {
  try {
    Sizzle(`li.area_guide`).forEach(element => {
      element.style.width = "96% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_db373b5b2ecfee34afbeced81088ef0b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_db373b5b2ecfee34afbeced81088ef0b, function (items) {
  if (mudfish_adclean_g_conf_db373b5b2ecfee34afbeced81088ef0b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_db373b5b2ecfee34afbeced81088ef0b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
