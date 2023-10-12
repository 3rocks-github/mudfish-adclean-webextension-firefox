
function mudfish_adclean_09e1defa232f3c6cb0c105e64fa26803() {
  try {
    Sizzle(`article[id$="-banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_09e1defa232f3c6cb0c105e64fa26803 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_09e1defa232f3c6cb0c105e64fa26803, function (items) {
  if (mudfish_adclean_g_conf_09e1defa232f3c6cb0c105e64fa26803.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_09e1defa232f3c6cb0c105e64fa26803();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
