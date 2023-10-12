
function mudfish_adclean_4078660c8f414e1298e1011d43a61a04() {
  try {
    Sizzle(`iframe[id^="aswift_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4078660c8f414e1298e1011d43a61a04 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4078660c8f414e1298e1011d43a61a04, function (items) {
  if (mudfish_adclean_g_conf_4078660c8f414e1298e1011d43a61a04.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4078660c8f414e1298e1011d43a61a04();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
