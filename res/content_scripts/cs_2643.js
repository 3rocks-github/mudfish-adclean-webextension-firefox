
function mudfish_adclean_fa6e610ec4091ef465873b4d951a3d3f() {
  try {
    Sizzle(`.googleAd`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fa6e610ec4091ef465873b4d951a3d3f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fa6e610ec4091ef465873b4d951a3d3f, function (items) {
  if (mudfish_adclean_g_conf_fa6e610ec4091ef465873b4d951a3d3f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fa6e610ec4091ef465873b4d951a3d3f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_fa6e610ec4091ef465873b4d951a3d3f();
    });
  }
});
