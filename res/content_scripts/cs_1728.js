
function mudfish_adclean_edeab7d8d5040ea89e05b701f6e49c9a() {
  try {
    Sizzle(`#header-top-notice`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_edeab7d8d5040ea89e05b701f6e49c9a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_edeab7d8d5040ea89e05b701f6e49c9a, function (items) {
  if (mudfish_adclean_g_conf_edeab7d8d5040ea89e05b701f6e49c9a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_edeab7d8d5040ea89e05b701f6e49c9a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_edeab7d8d5040ea89e05b701f6e49c9a();
    });
  }
});
