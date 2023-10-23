
function mudfish_adclean_c75e3811488a66b45924019fd0bbd2a6() {
  try {
    Sizzle(`.feature_index .box_user`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c75e3811488a66b45924019fd0bbd2a6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c75e3811488a66b45924019fd0bbd2a6, function (items) {
  if (mudfish_adclean_g_conf_c75e3811488a66b45924019fd0bbd2a6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c75e3811488a66b45924019fd0bbd2a6();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c75e3811488a66b45924019fd0bbd2a6();
    });
  }
});
