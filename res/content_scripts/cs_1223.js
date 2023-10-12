
function mudfish_adclean_61afbd7c25560354e444313d3d45519e() {
  try {
    Sizzle(`.respons-edit > div[style^="width:"].float-right`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_61afbd7c25560354e444313d3d45519e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_61afbd7c25560354e444313d3d45519e, function (items) {
  if (mudfish_adclean_g_conf_61afbd7c25560354e444313d3d45519e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_61afbd7c25560354e444313d3d45519e();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
