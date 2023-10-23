
function mudfish_adclean_f20a09b21786e7a916eab244162d627f() {
  try {
    Sizzle(`#aside > #partner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f20a09b21786e7a916eab244162d627f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f20a09b21786e7a916eab244162d627f, function (items) {
  if (mudfish_adclean_g_conf_f20a09b21786e7a916eab244162d627f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f20a09b21786e7a916eab244162d627f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f20a09b21786e7a916eab244162d627f();
    });
  }
});
