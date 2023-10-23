
function mudfish_adclean_8fc70412f92c279999b7c4a24d400c92() {
  try {
    Sizzle(`#google_ads`).forEach(element => {
      element.style.remove = "true";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8fc70412f92c279999b7c4a24d400c92 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8fc70412f92c279999b7c4a24d400c92, function (items) {
  if (mudfish_adclean_g_conf_8fc70412f92c279999b7c4a24d400c92.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8fc70412f92c279999b7c4a24d400c92();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8fc70412f92c279999b7c4a24d400c92();
    });
  }
});
