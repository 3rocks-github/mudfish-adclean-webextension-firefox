
function mudfish_adclean_0c2be377919f094789c67054950c6e75() {
  try {
    Sizzle(`#pnlContainer > div[class^="ct"] > .section > div[style]:not(class)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0c2be377919f094789c67054950c6e75 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0c2be377919f094789c67054950c6e75, function (items) {
  if (mudfish_adclean_g_conf_0c2be377919f094789c67054950c6e75.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0c2be377919f094789c67054950c6e75();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0c2be377919f094789c67054950c6e75();
    });
  }
});
