
function mudfish_adclean_ffde9ae6a1f1872db55469becec60f2d() {
  try {
    Sizzle(`ul[class$="Ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ffde9ae6a1f1872db55469becec60f2d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ffde9ae6a1f1872db55469becec60f2d, function (items) {
  if (mudfish_adclean_g_conf_ffde9ae6a1f1872db55469becec60f2d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ffde9ae6a1f1872db55469becec60f2d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
