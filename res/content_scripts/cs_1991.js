
function mudfish_adclean_0920b0e74127b044c33d4690717f89cb() {
  try {
    Sizzle(`#MM_aside_smartad_container`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0920b0e74127b044c33d4690717f89cb = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0920b0e74127b044c33d4690717f89cb, function (items) {
  if (mudfish_adclean_g_conf_0920b0e74127b044c33d4690717f89cb.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0920b0e74127b044c33d4690717f89cb();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0920b0e74127b044c33d4690717f89cb();
    });
  }
});
