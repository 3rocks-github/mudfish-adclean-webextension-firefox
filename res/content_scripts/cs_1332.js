
function mudfish_adclean_99dd10351dec967bdad163086e41a28a() {
  try {
    Sizzle(`div[class^="ai-viewport-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_99dd10351dec967bdad163086e41a28a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_99dd10351dec967bdad163086e41a28a, function (items) {
  if (mudfish_adclean_g_conf_99dd10351dec967bdad163086e41a28a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_99dd10351dec967bdad163086e41a28a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
