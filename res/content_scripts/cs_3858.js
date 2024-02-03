
function mudfish_adclean_636e5e232c19d96c643844d696338195() {
  try {
    Sizzle(`div[class*="border"]:has(> a[href][target*="_blank"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_636e5e232c19d96c643844d696338195 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_636e5e232c19d96c643844d696338195, function (items) {
  if (mudfish_adclean_g_conf_636e5e232c19d96c643844d696338195.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_636e5e232c19d96c643844d696338195();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_636e5e232c19d96c643844d696338195();
    });
  }
});
