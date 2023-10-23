
function mudfish_adclean_c941c5e0db09b90232dc1eee22aaa757() {
  try {
    Sizzle(`.ask_wrapper.not_host`).forEach(element => {
      element.style.top = "0px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c941c5e0db09b90232dc1eee22aaa757 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c941c5e0db09b90232dc1eee22aaa757, function (items) {
  if (mudfish_adclean_g_conf_c941c5e0db09b90232dc1eee22aaa757.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c941c5e0db09b90232dc1eee22aaa757();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c941c5e0db09b90232dc1eee22aaa757();
    });
  }
});
