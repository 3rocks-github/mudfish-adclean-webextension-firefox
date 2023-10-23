
function mudfish_adclean_3363c7d0f99474d37eb7b0bef6620f09() {
  try {
    Sizzle(`#powerPrdSection`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3363c7d0f99474d37eb7b0bef6620f09 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3363c7d0f99474d37eb7b0bef6620f09, function (items) {
  if (mudfish_adclean_g_conf_3363c7d0f99474d37eb7b0bef6620f09.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3363c7d0f99474d37eb7b0bef6620f09();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_3363c7d0f99474d37eb7b0bef6620f09();
    });
  }
});
