
function mudfish_adclean_b5314302d702f6c7ea90b2b9b76b449e() {
  try {
    Sizzle(`#partnership`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b5314302d702f6c7ea90b2b9b76b449e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b5314302d702f6c7ea90b2b9b76b449e, function (items) {
  if (mudfish_adclean_g_conf_b5314302d702f6c7ea90b2b9b76b449e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b5314302d702f6c7ea90b2b9b76b449e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b5314302d702f6c7ea90b2b9b76b449e();
    });
  }
});
