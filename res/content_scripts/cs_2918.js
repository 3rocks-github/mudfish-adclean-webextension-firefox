
function mudfish_adclean_297bb0b4b6536dc21209d40d7dfb6d8c() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`li.search-product__ad-badge`).forEach(element => {
        element.style.remove = "true";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_297bb0b4b6536dc21209d40d7dfb6d8c();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_297bb0b4b6536dc21209d40d7dfb6d8c();
  });
}
