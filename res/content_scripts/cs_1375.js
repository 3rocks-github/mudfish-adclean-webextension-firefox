
function mudfish_adclean_4746b3260809bb1e088732eb0d786a8a() {
  try {
    Sizzle(`td[width]:not([valign]) ~ td[align="left"] ul.banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4746b3260809bb1e088732eb0d786a8a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4746b3260809bb1e088732eb0d786a8a, function (items) {
  if (mudfish_adclean_g_conf_4746b3260809bb1e088732eb0d786a8a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4746b3260809bb1e088732eb0d786a8a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_4746b3260809bb1e088732eb0d786a8a();
    });
  }
});
