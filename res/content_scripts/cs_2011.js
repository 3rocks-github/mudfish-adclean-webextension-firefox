
function mudfish_adclean_3f12b301210dd746e018a6b06519e390() {
  try {
    Sizzle(`#hd_pop`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3f12b301210dd746e018a6b06519e390 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3f12b301210dd746e018a6b06519e390, function (items) {
  if (mudfish_adclean_g_conf_3f12b301210dd746e018a6b06519e390.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3f12b301210dd746e018a6b06519e390();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
