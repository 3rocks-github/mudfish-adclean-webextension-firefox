
function mudfish_adclean_71b2ba04016953a55dd233e345f90f6a() {
  try {
    Sizzle(`.swim-side .module_plugin:has(a[target="_blank"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_71b2ba04016953a55dd233e345f90f6a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_71b2ba04016953a55dd233e345f90f6a, function (items) {
  if (mudfish_adclean_g_conf_71b2ba04016953a55dd233e345f90f6a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_71b2ba04016953a55dd233e345f90f6a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
