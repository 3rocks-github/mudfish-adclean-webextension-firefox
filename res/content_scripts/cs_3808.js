
function mudfish_adclean_e862355dc3687270ff68d053e0f335d5() {
  try {
    Sizzle(`.ad-form > .row > div[class^="col-md-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e862355dc3687270ff68d053e0f335d5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e862355dc3687270ff68d053e0f335d5, function (items) {
  if (mudfish_adclean_g_conf_e862355dc3687270ff68d053e0f335d5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e862355dc3687270ff68d053e0f335d5();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e862355dc3687270ff68d053e0f335d5();
    });
  }
});
