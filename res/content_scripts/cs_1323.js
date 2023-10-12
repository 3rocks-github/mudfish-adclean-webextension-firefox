
function mudfish_adclean_7dec236597264ebeb92575f7b219f725() {
  try {
    Sizzle(`.wrapper > div[style*=" "]#container > div:not([class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7dec236597264ebeb92575f7b219f725 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7dec236597264ebeb92575f7b219f725, function (items) {
  if (mudfish_adclean_g_conf_7dec236597264ebeb92575f7b219f725.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7dec236597264ebeb92575f7b219f725();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
