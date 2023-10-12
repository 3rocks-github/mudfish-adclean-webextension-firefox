
function mudfish_adclean_8f90f3ed8f3d6b62a179eaa946293e2f() {
  try {
    Sizzle(`article[id$="_banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8f90f3ed8f3d6b62a179eaa946293e2f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8f90f3ed8f3d6b62a179eaa946293e2f, function (items) {
  if (mudfish_adclean_g_conf_8f90f3ed8f3d6b62a179eaa946293e2f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8f90f3ed8f3d6b62a179eaa946293e2f();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
