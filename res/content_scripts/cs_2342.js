
function mudfish_adclean_b13fada2b244650d285da4f51540086f() {
  try {
    Sizzle(`.bot-content-area .mid-util-wrap > div`).forEach(element => {
      element.style.width = "calc(50% - 5px) !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b13fada2b244650d285da4f51540086f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b13fada2b244650d285da4f51540086f, function (items) {
  if (mudfish_adclean_g_conf_b13fada2b244650d285da4f51540086f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b13fada2b244650d285da4f51540086f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b13fada2b244650d285da4f51540086f();
    });
  }
});
