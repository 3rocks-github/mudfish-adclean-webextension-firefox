
function mudfish_adclean_23cec800c4a8a55bc4d0ba5b8e4c4667() {
  try {
    Sizzle(`.oxad`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_23cec800c4a8a55bc4d0ba5b8e4c4667 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_23cec800c4a8a55bc4d0ba5b8e4c4667, function (items) {
  if (mudfish_adclean_g_conf_23cec800c4a8a55bc4d0ba5b8e4c4667.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_23cec800c4a8a55bc4d0ba5b8e4c4667();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_23cec800c4a8a55bc4d0ba5b8e4c4667();
    });
  }
});
