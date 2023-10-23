
function mudfish_adclean_5aa82e812e693f8cfc9b29e7fefb90c8() {
  try {
    Sizzle(`#containerCol .at-content .contents > a[href][target] > img[src^="/bann/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5aa82e812e693f8cfc9b29e7fefb90c8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5aa82e812e693f8cfc9b29e7fefb90c8, function (items) {
  if (mudfish_adclean_g_conf_5aa82e812e693f8cfc9b29e7fefb90c8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5aa82e812e693f8cfc9b29e7fefb90c8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5aa82e812e693f8cfc9b29e7fefb90c8();
    });
  }
});
