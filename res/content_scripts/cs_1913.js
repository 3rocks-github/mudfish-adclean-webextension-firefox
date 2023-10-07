
function mudfish_adclean_80aab281466953fe7a42e9e405c7b573() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class][data-ad-media][data-ad-pubuser][data-ad-type][data-ad-width][data-ad-height]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_80aab281466953fe7a42e9e405c7b573();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_80aab281466953fe7a42e9e405c7b573();
  });
}
