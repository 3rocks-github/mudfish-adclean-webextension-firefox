
function mudfish_adclean_36a6aafd39b39c45bd851553c186d3c1() {
  try {
    Sizzle(`header .artc_ad`).forEach(element => {
      element.style.height = "130px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_36a6aafd39b39c45bd851553c186d3c1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_36a6aafd39b39c45bd851553c186d3c1, function (items) {
  if (mudfish_adclean_g_conf_36a6aafd39b39c45bd851553c186d3c1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_36a6aafd39b39c45bd851553c186d3c1();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_36a6aafd39b39c45bd851553c186d3c1();
    });
  }
});
