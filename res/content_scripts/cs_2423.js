
function mudfish_adclean_1dae491a1185f853816f3db49954a943() {
  try {
    Sizzle(`aside .box-margins:has(~ .box-skin.point-title)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1dae491a1185f853816f3db49954a943 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1dae491a1185f853816f3db49954a943, function (items) {
  if (mudfish_adclean_g_conf_1dae491a1185f853816f3db49954a943.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1dae491a1185f853816f3db49954a943();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
