
function mudfish_adclean_85fb361e6f0f91e072e3fea6dbd8f698() {
  try {
    Sizzle(`iframe[src^="//shop-redapi.daum.net/red-apigate/daumtop/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_85fb361e6f0f91e072e3fea6dbd8f698 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_85fb361e6f0f91e072e3fea6dbd8f698, function (items) {
  if (mudfish_adclean_g_conf_85fb361e6f0f91e072e3fea6dbd8f698.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_85fb361e6f0f91e072e3fea6dbd8f698();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
