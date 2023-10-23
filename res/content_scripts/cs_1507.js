
function mudfish_adclean_13da5cbe7d82afe0028d2aa0400539f7() {
  try {
    Sizzle(`article > .inner ~ b`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_13da5cbe7d82afe0028d2aa0400539f7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_13da5cbe7d82afe0028d2aa0400539f7, function (items) {
  if (mudfish_adclean_g_conf_13da5cbe7d82afe0028d2aa0400539f7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_13da5cbe7d82afe0028d2aa0400539f7();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_13da5cbe7d82afe0028d2aa0400539f7();
    });
  }
});
