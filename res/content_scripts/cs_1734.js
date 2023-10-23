
function mudfish_adclean_859127e2f78eb97d0dab0ff1424d9915() {
  try {
    Sizzle(`div[data-sticky].sticky > .side-panel`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_859127e2f78eb97d0dab0ff1424d9915 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_859127e2f78eb97d0dab0ff1424d9915, function (items) {
  if (mudfish_adclean_g_conf_859127e2f78eb97d0dab0ff1424d9915.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_859127e2f78eb97d0dab0ff1424d9915();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_859127e2f78eb97d0dab0ff1424d9915();
    });
  }
});
