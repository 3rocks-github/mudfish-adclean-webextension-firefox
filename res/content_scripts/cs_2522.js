
function mudfish_adclean_7cd2ca8c646f777e58aa3b4997d2baab() {
  try {
    Sizzle(`#section-main.cf > div[class^="section-"] > div[class^="section-"] > div:has( > a[href][alt][target="_blank"] > img[alt][src])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7cd2ca8c646f777e58aa3b4997d2baab = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7cd2ca8c646f777e58aa3b4997d2baab, function (items) {
  if (mudfish_adclean_g_conf_7cd2ca8c646f777e58aa3b4997d2baab.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7cd2ca8c646f777e58aa3b4997d2baab();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7cd2ca8c646f777e58aa3b4997d2baab();
    });
  }
});
