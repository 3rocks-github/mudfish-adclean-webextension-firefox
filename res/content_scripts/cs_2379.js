
function mudfish_adclean_ac14c21411429adad7e75549e30aeadd() {
  try {
    Sizzle(`header`).forEach(element => {
      element.style.height = "100px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ac14c21411429adad7e75549e30aeadd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ac14c21411429adad7e75549e30aeadd, function (items) {
  if (mudfish_adclean_g_conf_ac14c21411429adad7e75549e30aeadd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ac14c21411429adad7e75549e30aeadd();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ac14c21411429adad7e75549e30aeadd();
    });
  }
});
