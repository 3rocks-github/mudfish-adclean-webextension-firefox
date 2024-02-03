
function mudfish_adclean_483f3bfb9022940d072a586c416e10b7() {
  try {
    Sizzle(`header`).forEach(element => {
      element.style.top = "0px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_483f3bfb9022940d072a586c416e10b7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_483f3bfb9022940d072a586c416e10b7, function (items) {
  if (mudfish_adclean_g_conf_483f3bfb9022940d072a586c416e10b7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_483f3bfb9022940d072a586c416e10b7();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_483f3bfb9022940d072a586c416e10b7();
    });
  }
});
