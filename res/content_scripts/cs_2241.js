
function mudfish_adclean_4b039ff2709090f0d55038447c1a6e9c() {
  try {
    Sizzle(`div[data-tiara-layer]:not([id])`).forEach(element => {
      element.style.marginTop = "0px !important";
element.style.position = "relative !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4b039ff2709090f0d55038447c1a6e9c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4b039ff2709090f0d55038447c1a6e9c, function (items) {
  if (mudfish_adclean_g_conf_4b039ff2709090f0d55038447c1a6e9c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4b039ff2709090f0d55038447c1a6e9c();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
