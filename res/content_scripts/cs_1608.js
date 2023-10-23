
function mudfish_adclean_ad02fd85c6e0e49edb5a74adb7df7e90() {
  try {
    Sizzle(`div[class*="-banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ad02fd85c6e0e49edb5a74adb7df7e90 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ad02fd85c6e0e49edb5a74adb7df7e90, function (items) {
  if (mudfish_adclean_g_conf_ad02fd85c6e0e49edb5a74adb7df7e90.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ad02fd85c6e0e49edb5a74adb7df7e90();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ad02fd85c6e0e49edb5a74adb7df7e90();
    });
  }
});
