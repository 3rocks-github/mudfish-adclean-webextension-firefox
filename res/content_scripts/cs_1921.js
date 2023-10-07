
function mudfish_adclean_33a62a31dbaee7ac5645981644fd81d8() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#article_body_content > .link_news > ul > div[class] > div[style]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_33a62a31dbaee7ac5645981644fd81d8();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_33a62a31dbaee7ac5645981644fd81d8();
  });
}
