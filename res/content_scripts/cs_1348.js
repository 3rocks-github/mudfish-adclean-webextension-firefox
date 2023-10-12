
function mudfish_adclean_db7ab61968cacd3e1ed3470643572893() {
  try {
    Sizzle(`header .dis-table > div[style^="padding-top:"].dis-table-cell`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_db7ab61968cacd3e1ed3470643572893 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_db7ab61968cacd3e1ed3470643572893, function (items) {
  if (mudfish_adclean_g_conf_db7ab61968cacd3e1ed3470643572893.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_db7ab61968cacd3e1ed3470643572893();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
