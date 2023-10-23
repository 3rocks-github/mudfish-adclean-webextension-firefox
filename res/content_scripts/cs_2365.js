
function mudfish_adclean_058a1ded5ff20b236a515069679411dc() {
  try {
    Sizzle(`.site-footer`).forEach(element => {
      element.style.paddingBottom = "0px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_058a1ded5ff20b236a515069679411dc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_058a1ded5ff20b236a515069679411dc, function (items) {
  if (mudfish_adclean_g_conf_058a1ded5ff20b236a515069679411dc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_058a1ded5ff20b236a515069679411dc();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_058a1ded5ff20b236a515069679411dc();
    });
  }
});
