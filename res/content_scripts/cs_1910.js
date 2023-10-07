
function mudfish_adclean_ea4f346f503dfe410988c5b374ae984a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`section > div[class^="listStyle"] > ul[class^="listStyle"] > li.first`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_ea4f346f503dfe410988c5b374ae984a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_ea4f346f503dfe410988c5b374ae984a();
  });
}
