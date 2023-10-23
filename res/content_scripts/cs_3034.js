
function mudfish_adclean_1ed711f1ec7420748de101c04da4775b() {
  try {
    Sizzle(`#yWelMid .yWelNowBook ul`).forEach(element => {
      element.style.marginLeft = "calc(50% - 436px) !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1ed711f1ec7420748de101c04da4775b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1ed711f1ec7420748de101c04da4775b, function (items) {
  if (mudfish_adclean_g_conf_1ed711f1ec7420748de101c04da4775b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1ed711f1ec7420748de101c04da4775b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_1ed711f1ec7420748de101c04da4775b();
    });
  }
});
