
function mudfish_adclean_8c3cb828a1c96d71edb294a938c2abad() {
  try {
    Sizzle(`body > div[align] > div[style*="overflow:hidden;"][align] > div > div[class] > a[href]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8c3cb828a1c96d71edb294a938c2abad = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8c3cb828a1c96d71edb294a938c2abad, function (items) {
  if (mudfish_adclean_g_conf_8c3cb828a1c96d71edb294a938c2abad.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8c3cb828a1c96d71edb294a938c2abad();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8c3cb828a1c96d71edb294a938c2abad();
    });
  }
});
