
function mudfish_adclean_db71ae1f9b94f383a2707d29afa3f430() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.AdvertisingList`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_db71ae1f9b94f383a2707d29afa3f430();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_db71ae1f9b94f383a2707d29afa3f430();
  });
}
