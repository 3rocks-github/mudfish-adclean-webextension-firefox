
function mudfish_adclean_866acd991e3b16956d182a51106049f9() {
  try {
    Sizzle(`div[style^="height"]#slrclub`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_866acd991e3b16956d182a51106049f9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_866acd991e3b16956d182a51106049f9, function (items) {
  if (mudfish_adclean_g_conf_866acd991e3b16956d182a51106049f9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_866acd991e3b16956d182a51106049f9();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_866acd991e3b16956d182a51106049f9();
    });
  }
});
