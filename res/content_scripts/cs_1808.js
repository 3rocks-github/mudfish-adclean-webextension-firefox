
function mudfish_adclean_873ce15091a02b3548be8c2b52e5138b() {
  try {
    Sizzle(`#container #content > .cpz_inner[style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_873ce15091a02b3548be8c2b52e5138b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_873ce15091a02b3548be8c2b52e5138b, function (items) {
  if (mudfish_adclean_g_conf_873ce15091a02b3548be8c2b52e5138b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_873ce15091a02b3548be8c2b52e5138b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
