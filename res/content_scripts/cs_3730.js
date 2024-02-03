
function mudfish_adclean_a7ef21080042b3b98acb6929177b8290() {
  try {
    Sizzle(`iframe[src^="https://loader.fmkorea.com/_loader/loader.php"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a7ef21080042b3b98acb6929177b8290 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a7ef21080042b3b98acb6929177b8290, function (items) {
  if (mudfish_adclean_g_conf_a7ef21080042b3b98acb6929177b8290.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a7ef21080042b3b98acb6929177b8290();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a7ef21080042b3b98acb6929177b8290();
    });
  }
});
