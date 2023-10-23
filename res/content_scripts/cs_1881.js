
function mudfish_adclean_c74d9d7736d03f0360b6b5875923005a() {
  try {
    Sizzle(`.box_shopping`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c74d9d7736d03f0360b6b5875923005a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c74d9d7736d03f0360b6b5875923005a, function (items) {
  if (mudfish_adclean_g_conf_c74d9d7736d03f0360b6b5875923005a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c74d9d7736d03f0360b6b5875923005a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c74d9d7736d03f0360b6b5875923005a();
    });
  }
});
