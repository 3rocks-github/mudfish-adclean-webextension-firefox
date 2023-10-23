
function mudfish_adclean_b80ca0b11e2d662b4a4906efca1cde03() {
  try {
    Sizzle(`.row-banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b80ca0b11e2d662b4a4906efca1cde03 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b80ca0b11e2d662b4a4906efca1cde03, function (items) {
  if (mudfish_adclean_g_conf_b80ca0b11e2d662b4a4906efca1cde03.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b80ca0b11e2d662b4a4906efca1cde03();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b80ca0b11e2d662b4a4906efca1cde03();
    });
  }
});
