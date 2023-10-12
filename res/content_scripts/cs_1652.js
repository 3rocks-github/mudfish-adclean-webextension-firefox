
function mudfish_adclean_3cf77e36c7ac01ffe9e9f3905f22cec3() {
  try {
    Sizzle(`.article > div[style][class]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3cf77e36c7ac01ffe9e9f3905f22cec3 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3cf77e36c7ac01ffe9e9f3905f22cec3, function (items) {
  if (mudfish_adclean_g_conf_3cf77e36c7ac01ffe9e9f3905f22cec3.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3cf77e36c7ac01ffe9e9f3905f22cec3();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
