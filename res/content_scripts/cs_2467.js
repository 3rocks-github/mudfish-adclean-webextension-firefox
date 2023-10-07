
function mudfish_adclean_f69c62bfeb33e0208954af3ee268cf75() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class*=" "]:has(> a[class*=" "][href][target="_blank"] img[src*="/_next/image?url="][src*="%2Fuploads%2Fbanner%2F"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_f69c62bfeb33e0208954af3ee268cf75();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_f69c62bfeb33e0208954af3ee268cf75();
  });
}
