
function mudfish_adclean_70a9d776b2308af4a24b6d13de04a067() {
  try {
    Sizzle(`.ebs_item .inner > div[class]`).forEach(element => {
      element.style.width = "50% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_70a9d776b2308af4a24b6d13de04a067 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_70a9d776b2308af4a24b6d13de04a067, function (items) {
  if (mudfish_adclean_g_conf_70a9d776b2308af4a24b6d13de04a067.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_70a9d776b2308af4a24b6d13de04a067();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_70a9d776b2308af4a24b6d13de04a067();
    });
  }
});
