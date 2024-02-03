
function mudfish_adclean_7cc692ebb22bc0552c7ad918d548b822() {
  try {
    Sizzle(`.list-body > .list-item-ad`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7cc692ebb22bc0552c7ad918d548b822 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7cc692ebb22bc0552c7ad918d548b822, function (items) {
  if (mudfish_adclean_g_conf_7cc692ebb22bc0552c7ad918d548b822.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7cc692ebb22bc0552c7ad918d548b822();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7cc692ebb22bc0552c7ad918d548b822();
    });
  }
});
