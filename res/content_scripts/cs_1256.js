
function mudfish_adclean_a67fe81d94ebbdd5444c0f56ed90a317() {
  try {
    Sizzle(`center + .bk40`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a67fe81d94ebbdd5444c0f56ed90a317 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a67fe81d94ebbdd5444c0f56ed90a317, function (items) {
  if (mudfish_adclean_g_conf_a67fe81d94ebbdd5444c0f56ed90a317.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a67fe81d94ebbdd5444c0f56ed90a317();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
