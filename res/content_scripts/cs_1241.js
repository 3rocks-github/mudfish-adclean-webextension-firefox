
function mudfish_adclean_505f0c834e144b3d57e086ca59434ae7() {
  try {
    Sizzle(`.touch_none ~ div[style^="min-height:"].bd_back`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_505f0c834e144b3d57e086ca59434ae7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_505f0c834e144b3d57e086ca59434ae7, function (items) {
  if (mudfish_adclean_g_conf_505f0c834e144b3d57e086ca59434ae7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_505f0c834e144b3d57e086ca59434ae7();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_505f0c834e144b3d57e086ca59434ae7();
    });
  }
});
