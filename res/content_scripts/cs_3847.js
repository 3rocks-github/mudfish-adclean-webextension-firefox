
function mudfish_adclean_e5922246e5394089a0c300c9b1933843() {
  try {
    Sizzle(`div[class^="col-lg-offset-"] > div[class^="col-lg-"][style]:has(a[onclick*="link("])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e5922246e5394089a0c300c9b1933843 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e5922246e5394089a0c300c9b1933843, function (items) {
  if (mudfish_adclean_g_conf_e5922246e5394089a0c300c9b1933843.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e5922246e5394089a0c300c9b1933843();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e5922246e5394089a0c300c9b1933843();
    });
  }
});
