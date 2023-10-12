
function mudfish_adclean_d3fcdb51c093ac0596540ecc9c5a5877() {
  try {
    Sizzle(`#sidebar > .module:contains(Ad)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d3fcdb51c093ac0596540ecc9c5a5877 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d3fcdb51c093ac0596540ecc9c5a5877, function (items) {
  if (mudfish_adclean_g_conf_d3fcdb51c093ac0596540ecc9c5a5877.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d3fcdb51c093ac0596540ecc9c5a5877();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
