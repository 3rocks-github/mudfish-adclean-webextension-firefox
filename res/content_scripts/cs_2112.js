
function mudfish_adclean_f06d8f3808d90c4a5fcf1aeec48a658e() {
  try {
    Sizzle(`.is-hover a[href^="http"][target="_blank"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f06d8f3808d90c4a5fcf1aeec48a658e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f06d8f3808d90c4a5fcf1aeec48a658e, function (items) {
  if (mudfish_adclean_g_conf_f06d8f3808d90c4a5fcf1aeec48a658e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f06d8f3808d90c4a5fcf1aeec48a658e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f06d8f3808d90c4a5fcf1aeec48a658e();
    });
  }
});
