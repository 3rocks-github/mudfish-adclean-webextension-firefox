
function mudfish_adclean_04efdd801d9f27f59343d010b76e2c32() {
  try {
    Sizzle(`div[class*="adsense-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_04efdd801d9f27f59343d010b76e2c32 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_04efdd801d9f27f59343d010b76e2c32, function (items) {
  if (mudfish_adclean_g_conf_04efdd801d9f27f59343d010b76e2c32.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_04efdd801d9f27f59343d010b76e2c32();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_04efdd801d9f27f59343d010b76e2c32();
    });
  }
});
