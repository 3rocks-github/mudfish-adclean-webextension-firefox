
function mudfish_adclean_2b20903a5b3f659bb37af3887bc8fb3d() {
  try {
    Sizzle(`.power-tit`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2b20903a5b3f659bb37af3887bc8fb3d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2b20903a5b3f659bb37af3887bc8fb3d, function (items) {
  if (mudfish_adclean_g_conf_2b20903a5b3f659bb37af3887bc8fb3d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2b20903a5b3f659bb37af3887bc8fb3d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2b20903a5b3f659bb37af3887bc8fb3d();
    });
  }
});
