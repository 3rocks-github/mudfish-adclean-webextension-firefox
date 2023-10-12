
function mudfish_adclean_1303c098ad5be211c8f57ed7e5b14cc7() {
  try {
    Sizzle(`#welcome_Right > .evntall`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1303c098ad5be211c8f57ed7e5b14cc7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1303c098ad5be211c8f57ed7e5b14cc7, function (items) {
  if (mudfish_adclean_g_conf_1303c098ad5be211c8f57ed7e5b14cc7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1303c098ad5be211c8f57ed7e5b14cc7();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
