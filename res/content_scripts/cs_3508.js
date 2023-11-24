
function mudfish_adclean_4c9e0628826d060dce9728c20a9f8b36() {
  try {
    Sizzle(`#custom_html-8`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4c9e0628826d060dce9728c20a9f8b36 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4c9e0628826d060dce9728c20a9f8b36, function (items) {
  if (mudfish_adclean_g_conf_4c9e0628826d060dce9728c20a9f8b36.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4c9e0628826d060dce9728c20a9f8b36();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_4c9e0628826d060dce9728c20a9f8b36();
    });
  }
});
