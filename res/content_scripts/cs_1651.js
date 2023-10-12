
function mudfish_adclean_9f5bab3417b5a4919e73955bd44f264b() {
  try {
    Sizzle(`.adpost`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9f5bab3417b5a4919e73955bd44f264b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9f5bab3417b5a4919e73955bd44f264b, function (items) {
  if (mudfish_adclean_g_conf_9f5bab3417b5a4919e73955bd44f264b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9f5bab3417b5a4919e73955bd44f264b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
