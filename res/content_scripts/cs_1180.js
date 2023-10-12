
function mudfish_adclean_f803a74cf5c3fceff287ff5fa68eb89b() {
  try {
    Sizzle(`section[class$="-ads"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f803a74cf5c3fceff287ff5fa68eb89b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f803a74cf5c3fceff287ff5fa68eb89b, function (items) {
  if (mudfish_adclean_g_conf_f803a74cf5c3fceff287ff5fa68eb89b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f803a74cf5c3fceff287ff5fa68eb89b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
