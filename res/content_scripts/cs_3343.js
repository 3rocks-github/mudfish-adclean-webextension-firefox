
function mudfish_adclean_4077daa0debacefb6978f03b6451c510() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`section[class^="css-"] section[class^="css-"] > [class^="css-"]:is(:has(section > a[target="_blank"]), :has(> div[class^="media-area "])):contains( · AD):not(:has(section ~ section))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_4077daa0debacefb6978f03b6451c510();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_4077daa0debacefb6978f03b6451c510();
  });
}
