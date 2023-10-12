
function mudfish_adclean_e098f336954a393dc4cc53450cf87335() {
  try {
    Sizzle(`div[class^="AD-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e098f336954a393dc4cc53450cf87335 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e098f336954a393dc4cc53450cf87335, function (items) {
  if (mudfish_adclean_g_conf_e098f336954a393dc4cc53450cf87335.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e098f336954a393dc4cc53450cf87335();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
