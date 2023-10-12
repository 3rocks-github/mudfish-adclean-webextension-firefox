
function mudfish_adclean_af56de34c9e2c392776d8d89829076ae() {
  try {
    Sizzle(`.partners-wrap #partners`).forEach(element => {
      element.style.display = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_af56de34c9e2c392776d8d89829076ae = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_af56de34c9e2c392776d8d89829076ae, function (items) {
  if (mudfish_adclean_g_conf_af56de34c9e2c392776d8d89829076ae.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_af56de34c9e2c392776d8d89829076ae();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
