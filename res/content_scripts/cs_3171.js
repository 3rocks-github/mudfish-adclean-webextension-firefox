
function mudfish_adclean_266f4c24998dcbaa73a388e0308c4d7b() {
  try {
    Sizzle(`.panel-default ~ .row > .col-sm-6`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_266f4c24998dcbaa73a388e0308c4d7b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_266f4c24998dcbaa73a388e0308c4d7b, function (items) {
  if (mudfish_adclean_g_conf_266f4c24998dcbaa73a388e0308c4d7b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_266f4c24998dcbaa73a388e0308c4d7b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_266f4c24998dcbaa73a388e0308c4d7b();
    });
  }
});
