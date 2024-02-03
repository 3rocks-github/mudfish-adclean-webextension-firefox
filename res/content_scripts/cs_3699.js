
function mudfish_adclean_789d7d2971a2b75d0d01dcb441bd4690() {
  try {
    Sizzle(`#banner_header`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_789d7d2971a2b75d0d01dcb441bd4690 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_789d7d2971a2b75d0d01dcb441bd4690, function (items) {
  if (mudfish_adclean_g_conf_789d7d2971a2b75d0d01dcb441bd4690.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_789d7d2971a2b75d0d01dcb441bd4690();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_789d7d2971a2b75d0d01dcb441bd4690();
    });
  }
});
