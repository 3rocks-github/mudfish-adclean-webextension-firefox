
function mudfish_adclean_908d678dcf66a2353b2cc7ab0d80096b() {
  try {
    Sizzle(`div[id*="_info_read_abt_div"].bg0`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_908d678dcf66a2353b2cc7ab0d80096b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_908d678dcf66a2353b2cc7ab0d80096b, function (items) {
  if (mudfish_adclean_g_conf_908d678dcf66a2353b2cc7ab0d80096b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_908d678dcf66a2353b2cc7ab0d80096b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_908d678dcf66a2353b2cc7ab0d80096b();
    });
  }
});
