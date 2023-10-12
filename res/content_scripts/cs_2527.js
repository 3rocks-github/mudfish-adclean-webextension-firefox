
function mudfish_adclean_6ee0fe61fc3fb581665a1680337b1a4d() {
  try {
    Sizzle(`section.textList > article.row:has(> ul.aritcle-info > li.title > a[href*="//adv.imadrep.co.kr/"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6ee0fe61fc3fb581665a1680337b1a4d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6ee0fe61fc3fb581665a1680337b1a4d, function (items) {
  if (mudfish_adclean_g_conf_6ee0fe61fc3fb581665a1680337b1a4d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6ee0fe61fc3fb581665a1680337b1a4d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
