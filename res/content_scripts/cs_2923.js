
function mudfish_adclean_245373eca8b17f1adaebdb0cafa05157() {
  try {
    Sizzle(`.AdSense`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_245373eca8b17f1adaebdb0cafa05157 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_245373eca8b17f1adaebdb0cafa05157, function (items) {
  if (mudfish_adclean_g_conf_245373eca8b17f1adaebdb0cafa05157.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_245373eca8b17f1adaebdb0cafa05157();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
