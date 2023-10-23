
function mudfish_adclean_e39dda1a0f38f311df6e531146479a4d() {
  try {
    Sizzle(`div[id][style] > div[style*="margin-top:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e39dda1a0f38f311df6e531146479a4d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e39dda1a0f38f311df6e531146479a4d, function (items) {
  if (mudfish_adclean_g_conf_e39dda1a0f38f311df6e531146479a4d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e39dda1a0f38f311df6e531146479a4d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e39dda1a0f38f311df6e531146479a4d();
    });
  }
});
