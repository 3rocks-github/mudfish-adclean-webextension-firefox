
function mudfish_adclean_33a62a31dbaee7ac5645981644fd81d8() {
  try {
    Sizzle(`#article_body_content > .link_news > ul > div[class] > div[style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_33a62a31dbaee7ac5645981644fd81d8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_33a62a31dbaee7ac5645981644fd81d8, function (items) {
  if (mudfish_adclean_g_conf_33a62a31dbaee7ac5645981644fd81d8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_33a62a31dbaee7ac5645981644fd81d8();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
