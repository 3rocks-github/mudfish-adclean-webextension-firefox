
function mudfish_adclean_221b62eb1ae2eedf3fbcdcdf90ec068b() {
  try {
    Sizzle(`.coupangPosition`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_221b62eb1ae2eedf3fbcdcdf90ec068b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_221b62eb1ae2eedf3fbcdcdf90ec068b, function (items) {
  if (mudfish_adclean_g_conf_221b62eb1ae2eedf3fbcdcdf90ec068b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_221b62eb1ae2eedf3fbcdcdf90ec068b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_221b62eb1ae2eedf3fbcdcdf90ec068b();
    });
  }
});
