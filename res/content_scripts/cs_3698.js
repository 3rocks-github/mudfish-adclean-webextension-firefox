
function mudfish_adclean_9d62ad9946ee7f5070b8dfe8c722ea7e() {
  try {
    Sizzle(`iframe[src*="//img.tvchosun.com/upload_img/"][src*="/ad/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9d62ad9946ee7f5070b8dfe8c722ea7e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9d62ad9946ee7f5070b8dfe8c722ea7e, function (items) {
  if (mudfish_adclean_g_conf_9d62ad9946ee7f5070b8dfe8c722ea7e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9d62ad9946ee7f5070b8dfe8c722ea7e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9d62ad9946ee7f5070b8dfe8c722ea7e();
    });
  }
});
