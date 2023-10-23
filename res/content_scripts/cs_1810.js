
function mudfish_adclean_1e5bc8a3780bc8199bdb29f3fcb0ff0e() {
  try {
    Sizzle(`#container #content > .gradation_area`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1e5bc8a3780bc8199bdb29f3fcb0ff0e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1e5bc8a3780bc8199bdb29f3fcb0ff0e, function (items) {
  if (mudfish_adclean_g_conf_1e5bc8a3780bc8199bdb29f3fcb0ff0e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1e5bc8a3780bc8199bdb29f3fcb0ff0e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_1e5bc8a3780bc8199bdb29f3fcb0ff0e();
    });
  }
});
