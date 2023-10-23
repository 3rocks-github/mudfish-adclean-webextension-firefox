
function mudfish_adclean_c42d01812711c9147f12adfec64f0fd9() {
  try {
    Sizzle(`.top-navigation .wrapper > .row.equal > div[class="col-xs-12 col-sm-6 col-lg-4"][style^="padding:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c42d01812711c9147f12adfec64f0fd9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c42d01812711c9147f12adfec64f0fd9, function (items) {
  if (mudfish_adclean_g_conf_c42d01812711c9147f12adfec64f0fd9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c42d01812711c9147f12adfec64f0fd9();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c42d01812711c9147f12adfec64f0fd9();
    });
  }
});
