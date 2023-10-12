
function mudfish_adclean_812a1879225680de717688a3bbf82162() {
  try {
    Sizzle(`table[style][width][cellspacing][cellpadding] tr[valign] > td[style] > div[style]`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_812a1879225680de717688a3bbf82162 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_812a1879225680de717688a3bbf82162, function (items) {
  if (mudfish_adclean_g_conf_812a1879225680de717688a3bbf82162.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_812a1879225680de717688a3bbf82162();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
