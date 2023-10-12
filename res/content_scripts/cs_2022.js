
function mudfish_adclean_f905bb2ce807222989ba594effb993a0() {
  try {
    Sizzle(`.content > div.bd > div.clear > div > center`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f905bb2ce807222989ba594effb993a0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f905bb2ce807222989ba594effb993a0, function (items) {
  if (mudfish_adclean_g_conf_f905bb2ce807222989ba594effb993a0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f905bb2ce807222989ba594effb993a0();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
