
function mudfish_adclean_10a1a3e532145d626c779d4894ce3d69() {
  try {
    Sizzle(`.result_wrap`).forEach(element => {
      element.style.display = "block !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_10a1a3e532145d626c779d4894ce3d69 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_10a1a3e532145d626c779d4894ce3d69, function (items) {
  if (mudfish_adclean_g_conf_10a1a3e532145d626c779d4894ce3d69.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_10a1a3e532145d626c779d4894ce3d69();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_10a1a3e532145d626c779d4894ce3d69();
    });
  }
});
