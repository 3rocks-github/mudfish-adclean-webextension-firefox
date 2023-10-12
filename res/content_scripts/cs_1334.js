
function mudfish_adclean_c0221dd2ca16f119f714d02f13453058() {
  try {
    Sizzle(`#banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c0221dd2ca16f119f714d02f13453058 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c0221dd2ca16f119f714d02f13453058, function (items) {
  if (mudfish_adclean_g_conf_c0221dd2ca16f119f714d02f13453058.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c0221dd2ca16f119f714d02f13453058();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
