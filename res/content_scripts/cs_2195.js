
function mudfish_adclean_fb16f94ea5106d3a9aa9ed27b87c66c3() {
  try {
    Sizzle(`#gallery-advert`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fb16f94ea5106d3a9aa9ed27b87c66c3 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fb16f94ea5106d3a9aa9ed27b87c66c3, function (items) {
  if (mudfish_adclean_g_conf_fb16f94ea5106d3a9aa9ed27b87c66c3.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fb16f94ea5106d3a9aa9ed27b87c66c3();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_fb16f94ea5106d3a9aa9ed27b87c66c3();
    });
  }
});
