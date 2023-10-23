
function mudfish_adclean_04ba8abddf1cedc4edcbe38665d485c1() {
  try {
    Sizzle(`.blockUI.blockMsg.blockPage`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_04ba8abddf1cedc4edcbe38665d485c1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_04ba8abddf1cedc4edcbe38665d485c1, function (items) {
  if (mudfish_adclean_g_conf_04ba8abddf1cedc4edcbe38665d485c1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_04ba8abddf1cedc4edcbe38665d485c1();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_04ba8abddf1cedc4edcbe38665d485c1();
    });
  }
});
