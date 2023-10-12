
function mudfish_adclean_178a4a1563bb2086bcec807705d6b3d0() {
  try {
    Sizzle(`#newsViewArea div[style^="width:"]:not([originw])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_178a4a1563bb2086bcec807705d6b3d0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_178a4a1563bb2086bcec807705d6b3d0, function (items) {
  if (mudfish_adclean_g_conf_178a4a1563bb2086bcec807705d6b3d0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_178a4a1563bb2086bcec807705d6b3d0();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
