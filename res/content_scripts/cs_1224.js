
function mudfish_adclean_fdc7d3fc71874dff4fc499ee6351b198() {
  try {
    Sizzle(`#news-contents div[style*="margin:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fdc7d3fc71874dff4fc499ee6351b198 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fdc7d3fc71874dff4fc499ee6351b198, function (items) {
  if (mudfish_adclean_g_conf_fdc7d3fc71874dff4fc499ee6351b198.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fdc7d3fc71874dff4fc499ee6351b198();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_fdc7d3fc71874dff4fc499ee6351b198();
    });
  }
});
