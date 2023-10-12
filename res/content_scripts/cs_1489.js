
function mudfish_adclean_7e93bef54b35cbceef37b8773c7e218e() {
  try {
    Sizzle(`.container > div[style]:not([class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7e93bef54b35cbceef37b8773c7e218e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7e93bef54b35cbceef37b8773c7e218e, function (items) {
  if (mudfish_adclean_g_conf_7e93bef54b35cbceef37b8773c7e218e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7e93bef54b35cbceef37b8773c7e218e();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
