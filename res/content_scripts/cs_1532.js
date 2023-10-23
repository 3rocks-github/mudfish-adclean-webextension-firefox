
function mudfish_adclean_af22e78c0021f5109a034235b78c506b() {
  try {
    Sizzle(`[ng-if^="premiumLawyers"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_af22e78c0021f5109a034235b78c506b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_af22e78c0021f5109a034235b78c506b, function (items) {
  if (mudfish_adclean_g_conf_af22e78c0021f5109a034235b78c506b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_af22e78c0021f5109a034235b78c506b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_af22e78c0021f5109a034235b78c506b();
    });
  }
});
