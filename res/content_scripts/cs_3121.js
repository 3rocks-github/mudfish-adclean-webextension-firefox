
function mudfish_adclean_4a91e0ff553ed824a1374a4282073501() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`table[border="0"] > tbody > tr > td:not(td > div:not(div.noresize) + b > a:not([target="_blank"]))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_4a91e0ff553ed824a1374a4282073501();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_4a91e0ff553ed824a1374a4282073501();
  });
}
