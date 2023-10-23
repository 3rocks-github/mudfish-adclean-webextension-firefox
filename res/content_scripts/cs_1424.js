
function mudfish_adclean_bc90905555309caba1951c538354b1bd() {
  try {
    Sizzle(`#article-view-content-div div[class$="-banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bc90905555309caba1951c538354b1bd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bc90905555309caba1951c538354b1bd, function (items) {
  if (mudfish_adclean_g_conf_bc90905555309caba1951c538354b1bd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bc90905555309caba1951c538354b1bd();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_bc90905555309caba1951c538354b1bd();
    });
  }
});
