
function mudfish_adclean_d68598d6d35329db5fb4eec4b669838d() {
  try {
    Sizzle(`.alert.alert-danger:has(> a:contains([AD]))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d68598d6d35329db5fb4eec4b669838d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d68598d6d35329db5fb4eec4b669838d, function (items) {
  if (mudfish_adclean_g_conf_d68598d6d35329db5fb4eec4b669838d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d68598d6d35329db5fb4eec4b669838d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_d68598d6d35329db5fb4eec4b669838d();
    });
  }
});
