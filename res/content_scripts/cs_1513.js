
function mudfish_adclean_b2b2e464f408dff4ce3fb31e202e0abe() {
  try {
    Sizzle(`.mContRT .mbnRT`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b2b2e464f408dff4ce3fb31e202e0abe = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b2b2e464f408dff4ce3fb31e202e0abe, function (items) {
  if (mudfish_adclean_g_conf_b2b2e464f408dff4ce3fb31e202e0abe.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b2b2e464f408dff4ce3fb31e202e0abe();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b2b2e464f408dff4ce3fb31e202e0abe();
    });
  }
});
