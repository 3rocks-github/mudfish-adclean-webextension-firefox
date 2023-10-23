
function mudfish_adclean_29d8e9958443f78fb8c52e5bb2528daf() {
  try {
    Sizzle(`#xt_sticker_wrap`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_29d8e9958443f78fb8c52e5bb2528daf = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_29d8e9958443f78fb8c52e5bb2528daf, function (items) {
  if (mudfish_adclean_g_conf_29d8e9958443f78fb8c52e5bb2528daf.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_29d8e9958443f78fb8c52e5bb2528daf();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_29d8e9958443f78fb8c52e5bb2528daf();
    });
  }
});
