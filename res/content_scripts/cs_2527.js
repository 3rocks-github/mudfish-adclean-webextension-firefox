
function mudfish_adclean_6ee0fe61fc3fb581665a1680337b1a4d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`section.textList > article.row:has(> ul.aritcle-info > li.title > a[href*="//adv.imadrep.co.kr/"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6ee0fe61fc3fb581665a1680337b1a4d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6ee0fe61fc3fb581665a1680337b1a4d();
  });
}
