
function mudfish_adclean_685817dce014af653d73c33bf59c5eef() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`iframe[src^="/template/ads/"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_685817dce014af653d73c33bf59c5eef();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_685817dce014af653d73c33bf59c5eef();
  });
}
