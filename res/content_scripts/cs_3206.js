
function mudfish_adclean_110cb2a9962bb821ec52f81b2a60021b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`article[itemprop="articleBody"] > div[class]:has(div[role="alert"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_110cb2a9962bb821ec52f81b2a60021b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_110cb2a9962bb821ec52f81b2a60021b();
  });
}
