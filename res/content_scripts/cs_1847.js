
function mudfish_adclean_caa3f00556ecb1ecb5e71d3ffa17fd57() {
  try {
    Sizzle(`#ebayPowerClickBottomArea`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_caa3f00556ecb1ecb5e71d3ffa17fd57 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_caa3f00556ecb1ecb5e71d3ffa17fd57, function (items) {
  if (mudfish_adclean_g_conf_caa3f00556ecb1ecb5e71d3ffa17fd57.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_caa3f00556ecb1ecb5e71d3ffa17fd57();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
