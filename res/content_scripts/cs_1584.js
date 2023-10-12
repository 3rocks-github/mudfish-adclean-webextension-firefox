
function mudfish_adclean_f32a3c046eef0379bff02e1ae14c91e1() {
  try {
    Sizzle(`div[id^="container_"] .slide_box`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f32a3c046eef0379bff02e1ae14c91e1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f32a3c046eef0379bff02e1ae14c91e1, function (items) {
  if (mudfish_adclean_g_conf_f32a3c046eef0379bff02e1ae14c91e1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f32a3c046eef0379bff02e1ae14c91e1();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
