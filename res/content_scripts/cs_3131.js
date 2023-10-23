
function mudfish_adclean_bb7ee7d2119cbb486c7ff8136ab30ecd() {
  try {
    Sizzle(`#contain > div[style^="height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bb7ee7d2119cbb486c7ff8136ab30ecd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bb7ee7d2119cbb486c7ff8136ab30ecd, function (items) {
  if (mudfish_adclean_g_conf_bb7ee7d2119cbb486c7ff8136ab30ecd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bb7ee7d2119cbb486c7ff8136ab30ecd();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_bb7ee7d2119cbb486c7ff8136ab30ecd();
    });
  }
});
