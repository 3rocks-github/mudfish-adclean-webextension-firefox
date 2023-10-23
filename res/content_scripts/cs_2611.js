
function mudfish_adclean_50e0407ec3eff05e8da60a6e7d49af6a() {
  try {
    Sizzle(`.xe_content`).forEach(element => {
      element.style.opacity = "1 !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_50e0407ec3eff05e8da60a6e7d49af6a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_50e0407ec3eff05e8da60a6e7d49af6a, function (items) {
  if (mudfish_adclean_g_conf_50e0407ec3eff05e8da60a6e7d49af6a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_50e0407ec3eff05e8da60a6e7d49af6a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_50e0407ec3eff05e8da60a6e7d49af6a();
    });
  }
});
