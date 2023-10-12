
function mudfish_adclean_ae9af8f6ffb4bd66a37d90b13c07889f() {
  try {
    Sizzle(`.one_line_article > ul.list > li.item:not(:has(a[href^="/article.html?no="]))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ae9af8f6ffb4bd66a37d90b13c07889f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ae9af8f6ffb4bd66a37d90b13c07889f, function (items) {
  if (mudfish_adclean_g_conf_ae9af8f6ffb4bd66a37d90b13c07889f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ae9af8f6ffb4bd66a37d90b13c07889f();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
