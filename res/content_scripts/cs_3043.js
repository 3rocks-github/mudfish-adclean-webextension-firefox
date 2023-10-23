
function mudfish_adclean_98722a9a3d97caaa7cfa60f71ab937c4() {
  try {
    Sizzle(`#mbnRoll_001 > .mbnRollUnit > .pagen_4`).forEach(element => {
      element.style.width = "240px !important";
element.style.left = "717px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_98722a9a3d97caaa7cfa60f71ab937c4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_98722a9a3d97caaa7cfa60f71ab937c4, function (items) {
  if (mudfish_adclean_g_conf_98722a9a3d97caaa7cfa60f71ab937c4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_98722a9a3d97caaa7cfa60f71ab937c4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_98722a9a3d97caaa7cfa60f71ab937c4();
    });
  }
});
