
function mudfish_adclean_cb2cbb97ba6b14550d8c4680d46871a8() {
  try {
    Sizzle(`.article-ad ~ p[style][class^="title"]`).forEach(element => {
      element.style.marginTop = "100px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cb2cbb97ba6b14550d8c4680d46871a8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cb2cbb97ba6b14550d8c4680d46871a8, function (items) {
  if (mudfish_adclean_g_conf_cb2cbb97ba6b14550d8c4680d46871a8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cb2cbb97ba6b14550d8c4680d46871a8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_cb2cbb97ba6b14550d8c4680d46871a8();
    });
  }
});
