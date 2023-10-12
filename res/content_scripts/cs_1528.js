
function mudfish_adclean_6944ba780de79e9dc7973ac8ecc161ee() {
  try {
    Sizzle(`div[class*="-grey-"][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6944ba780de79e9dc7973ac8ecc161ee = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6944ba780de79e9dc7973ac8ecc161ee, function (items) {
  if (mudfish_adclean_g_conf_6944ba780de79e9dc7973ac8ecc161ee.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6944ba780de79e9dc7973ac8ecc161ee();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
