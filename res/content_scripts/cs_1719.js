
function mudfish_adclean_55921557d3ffbb6c37d1d3d39f414294() {
  try {
    Sizzle(`.bot-content-area .mid-util-wrap .right-util-area`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_55921557d3ffbb6c37d1d3d39f414294 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_55921557d3ffbb6c37d1d3d39f414294, function (items) {
  if (mudfish_adclean_g_conf_55921557d3ffbb6c37d1d3d39f414294.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_55921557d3ffbb6c37d1d3d39f414294();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_55921557d3ffbb6c37d1d3d39f414294();
    });
  }
});
