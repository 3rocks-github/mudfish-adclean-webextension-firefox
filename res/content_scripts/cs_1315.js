
function mudfish_adclean_faeaa3d6938899507001190ad68eae2f() {
  try {
    Sizzle(`div[id][style] > div[style*="margin-top:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_faeaa3d6938899507001190ad68eae2f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_faeaa3d6938899507001190ad68eae2f, function (items) {
  if (mudfish_adclean_g_conf_faeaa3d6938899507001190ad68eae2f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_faeaa3d6938899507001190ad68eae2f();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
