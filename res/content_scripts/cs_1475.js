
function mudfish_adclean_e3155cef90463415dc012533049d11a4() {
  try {
    Sizzle(`#div_laypopup`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e3155cef90463415dc012533049d11a4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e3155cef90463415dc012533049d11a4, function (items) {
  if (mudfish_adclean_g_conf_e3155cef90463415dc012533049d11a4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e3155cef90463415dc012533049d11a4();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
