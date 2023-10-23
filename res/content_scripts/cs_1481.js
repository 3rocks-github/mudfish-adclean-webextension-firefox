
function mudfish_adclean_8f04d336a15ba16d96c61dfd3fe9e6be() {
  try {
    Sizzle(`.contents_body > div[style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8f04d336a15ba16d96c61dfd3fe9e6be = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8f04d336a15ba16d96c61dfd3fe9e6be, function (items) {
  if (mudfish_adclean_g_conf_8f04d336a15ba16d96c61dfd3fe9e6be.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8f04d336a15ba16d96c61dfd3fe9e6be();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8f04d336a15ba16d96c61dfd3fe9e6be();
    });
  }
});
