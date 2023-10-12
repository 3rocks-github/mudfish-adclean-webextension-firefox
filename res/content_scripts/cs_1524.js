
function mudfish_adclean_cb2b53194cf12e1f24606ca7b2c08867() {
  try {
    Sizzle(`#Article > div[style]:not([class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cb2b53194cf12e1f24606ca7b2c08867 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cb2b53194cf12e1f24606ca7b2c08867, function (items) {
  if (mudfish_adclean_g_conf_cb2b53194cf12e1f24606ca7b2c08867.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cb2b53194cf12e1f24606ca7b2c08867();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
