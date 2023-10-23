
function mudfish_adclean_2e79e44a7de7a5d346c848718ec00bdf() {
  try {
    Sizzle(`div[class$="_banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2e79e44a7de7a5d346c848718ec00bdf = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2e79e44a7de7a5d346c848718ec00bdf, function (items) {
  if (mudfish_adclean_g_conf_2e79e44a7de7a5d346c848718ec00bdf.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2e79e44a7de7a5d346c848718ec00bdf();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2e79e44a7de7a5d346c848718ec00bdf();
    });
  }
});
