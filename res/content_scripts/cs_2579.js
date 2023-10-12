
function mudfish_adclean_2d25b253f54e63b3fdc429f478178b13() {
  try {
    Sizzle(`table.table-divider > tbody > tr.notice:has(> td.title > a > strong[style]:contains([프리미엄]))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2d25b253f54e63b3fdc429f478178b13 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2d25b253f54e63b3fdc429f478178b13, function (items) {
  if (mudfish_adclean_g_conf_2d25b253f54e63b3fdc429f478178b13.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2d25b253f54e63b3fdc429f478178b13();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
