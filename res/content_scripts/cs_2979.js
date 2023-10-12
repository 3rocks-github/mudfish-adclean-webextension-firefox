
function mudfish_adclean_f0ce515ac506f42e91703e9216be1996() {
  try {
    Sizzle(`center + .bk20`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f0ce515ac506f42e91703e9216be1996 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f0ce515ac506f42e91703e9216be1996, function (items) {
  if (mudfish_adclean_g_conf_f0ce515ac506f42e91703e9216be1996.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f0ce515ac506f42e91703e9216be1996();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
