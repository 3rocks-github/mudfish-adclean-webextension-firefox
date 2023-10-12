
function mudfish_adclean_cf1726537408f04722f873f09b65a679() {
  try {
    Sizzle(`section.shopping-board`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cf1726537408f04722f873f09b65a679 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cf1726537408f04722f873f09b65a679, function (items) {
  if (mudfish_adclean_g_conf_cf1726537408f04722f873f09b65a679.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cf1726537408f04722f873f09b65a679();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
