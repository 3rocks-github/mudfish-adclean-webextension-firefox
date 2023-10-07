
function mudfish_adclean_b4b411f2d4a42793d8341622757995b7() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#articlebody > div[style]:not([itemprop="articleBody"]).article_content`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_b4b411f2d4a42793d8341622757995b7();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_b4b411f2d4a42793d8341622757995b7();
  });
}
