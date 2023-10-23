
function mudfish_adclean_6ac926eba49b37ca847a302b594434e0() {
  try {
    Sizzle(`#hi-notice`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6ac926eba49b37ca847a302b594434e0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6ac926eba49b37ca847a302b594434e0, function (items) {
  if (mudfish_adclean_g_conf_6ac926eba49b37ca847a302b594434e0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6ac926eba49b37ca847a302b594434e0();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_6ac926eba49b37ca847a302b594434e0();
    });
  }
});
