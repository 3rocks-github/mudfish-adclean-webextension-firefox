
function mudfish_adclean_c527f075acb7b12c7baf8f8c63af41f1() {
  try {
    Sizzle(`body.home #contents > .floating`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c527f075acb7b12c7baf8f8c63af41f1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c527f075acb7b12c7baf8f8c63af41f1, function (items) {
  if (mudfish_adclean_g_conf_c527f075acb7b12c7baf8f8c63af41f1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c527f075acb7b12c7baf8f8c63af41f1();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c527f075acb7b12c7baf8f8c63af41f1();
    });
  }
});
