
function mudfish_adclean_8823b55dbb91eec6777b93f01317dee5() {
  try {
    Sizzle(`div[align="center"] + .row > .col-xs-6`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8823b55dbb91eec6777b93f01317dee5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8823b55dbb91eec6777b93f01317dee5, function (items) {
  if (mudfish_adclean_g_conf_8823b55dbb91eec6777b93f01317dee5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8823b55dbb91eec6777b93f01317dee5();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
