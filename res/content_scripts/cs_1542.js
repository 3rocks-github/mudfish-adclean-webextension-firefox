
function mudfish_adclean_0518569a060d1eea5610bd258a01435f() {
  try {
    Sizzle(`#boardPart > div[style]:not([class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0518569a060d1eea5610bd258a01435f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0518569a060d1eea5610bd258a01435f, function (items) {
  if (mudfish_adclean_g_conf_0518569a060d1eea5610bd258a01435f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0518569a060d1eea5610bd258a01435f();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
