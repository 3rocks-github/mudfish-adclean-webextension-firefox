
function mudfish_adclean_b88608b5590049cf725c2e833488d570() {
  try {
    Sizzle(`#commonpart_invenpc`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b88608b5590049cf725c2e833488d570 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b88608b5590049cf725c2e833488d570, function (items) {
  if (mudfish_adclean_g_conf_b88608b5590049cf725c2e833488d570.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b88608b5590049cf725c2e833488d570();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
