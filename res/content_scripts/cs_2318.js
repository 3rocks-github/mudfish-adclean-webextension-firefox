
function mudfish_adclean_2c8ea9b6ca3dd37579552d5044a6509b() {
  try {
    Sizzle(`#loginFormWrite`).forEach(element => {
      element.style.marginLeft = "25% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2c8ea9b6ca3dd37579552d5044a6509b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2c8ea9b6ca3dd37579552d5044a6509b, function (items) {
  if (mudfish_adclean_g_conf_2c8ea9b6ca3dd37579552d5044a6509b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2c8ea9b6ca3dd37579552d5044a6509b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
