
function mudfish_adclean_8675056e41d8e9ac3058c78c272afd55() {
  try {
    Sizzle(`.news-cont ~ .news-special`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8675056e41d8e9ac3058c78c272afd55 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8675056e41d8e9ac3058c78c272afd55, function (items) {
  if (mudfish_adclean_g_conf_8675056e41d8e9ac3058c78c272afd55.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8675056e41d8e9ac3058c78c272afd55();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8675056e41d8e9ac3058c78c272afd55();
    });
  }
});
