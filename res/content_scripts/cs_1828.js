
function mudfish_adclean_a83db364144524267f5796606cf6963f() {
  try {
    Sizzle(`#laAdArea`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a83db364144524267f5796606cf6963f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a83db364144524267f5796606cf6963f, function (items) {
  if (mudfish_adclean_g_conf_a83db364144524267f5796606cf6963f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a83db364144524267f5796606cf6963f();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
