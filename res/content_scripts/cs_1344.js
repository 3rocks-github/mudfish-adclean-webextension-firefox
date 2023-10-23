
function mudfish_adclean_bb1e79f5bf2ef23be0bce73e6660f129() {
  try {
    Sizzle(`.revenue_unit_wrap`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bb1e79f5bf2ef23be0bce73e6660f129 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bb1e79f5bf2ef23be0bce73e6660f129, function (items) {
  if (mudfish_adclean_g_conf_bb1e79f5bf2ef23be0bce73e6660f129.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bb1e79f5bf2ef23be0bce73e6660f129();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_bb1e79f5bf2ef23be0bce73e6660f129();
    });
  }
});
