
function mudfish_adclean_a1d2d543fd0e986e949f6e947f43deca() {
  try {
    Sizzle(`.aside_doctor .tour_box`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a1d2d543fd0e986e949f6e947f43deca = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a1d2d543fd0e986e949f6e947f43deca, function (items) {
  if (mudfish_adclean_g_conf_a1d2d543fd0e986e949f6e947f43deca.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a1d2d543fd0e986e949f6e947f43deca();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a1d2d543fd0e986e949f6e947f43deca();
    });
  }
});
