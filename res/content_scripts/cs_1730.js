
function mudfish_adclean_c15ad34de14c41b930084832e5dc9c81() {
  try {
    Sizzle(`a[href^="https://www.panel.co.kr/user/join/etcpath/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c15ad34de14c41b930084832e5dc9c81 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c15ad34de14c41b930084832e5dc9c81, function (items) {
  if (mudfish_adclean_g_conf_c15ad34de14c41b930084832e5dc9c81.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c15ad34de14c41b930084832e5dc9c81();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
