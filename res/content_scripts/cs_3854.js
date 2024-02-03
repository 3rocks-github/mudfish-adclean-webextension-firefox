
function mudfish_adclean_6b764d015a6444be41da16dc49eacc22() {
  try {
    Sizzle(`table .basic-info-alert:has(a[href="/marble/"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6b764d015a6444be41da16dc49eacc22 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6b764d015a6444be41da16dc49eacc22, function (items) {
  if (mudfish_adclean_g_conf_6b764d015a6444be41da16dc49eacc22.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6b764d015a6444be41da16dc49eacc22();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_6b764d015a6444be41da16dc49eacc22();
    });
  }
});
