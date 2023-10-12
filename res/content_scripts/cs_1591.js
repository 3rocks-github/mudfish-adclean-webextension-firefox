
function mudfish_adclean_01a3792aae21fb75d38147f5e4310157() {
  try {
    Sizzle(`div[style~="height:"][style~="border-top:"].relative`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_01a3792aae21fb75d38147f5e4310157 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_01a3792aae21fb75d38147f5e4310157, function (items) {
  if (mudfish_adclean_g_conf_01a3792aae21fb75d38147f5e4310157.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_01a3792aae21fb75d38147f5e4310157();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
