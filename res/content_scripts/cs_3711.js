
function mudfish_adclean_d3ec61e51c0da7608915db8f9b15082d() {
  try {
    Sizzle(`#container ~ div[style^="width:"][style*="height:"].mobile`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d3ec61e51c0da7608915db8f9b15082d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d3ec61e51c0da7608915db8f9b15082d, function (items) {
  if (mudfish_adclean_g_conf_d3ec61e51c0da7608915db8f9b15082d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d3ec61e51c0da7608915db8f9b15082d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_d3ec61e51c0da7608915db8f9b15082d();
    });
  }
});
