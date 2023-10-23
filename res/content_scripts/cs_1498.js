
function mudfish_adclean_9288f6e4119b80c21f5311c4da2a497f() {
  try {
    Sizzle(`.sub_article > div[style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9288f6e4119b80c21f5311c4da2a497f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9288f6e4119b80c21f5311c4da2a497f, function (items) {
  if (mudfish_adclean_g_conf_9288f6e4119b80c21f5311c4da2a497f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9288f6e4119b80c21f5311c4da2a497f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9288f6e4119b80c21f5311c4da2a497f();
    });
  }
});
