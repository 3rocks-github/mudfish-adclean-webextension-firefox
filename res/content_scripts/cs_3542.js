
function mudfish_adclean_059e0ce50319e966a4e2a3a22878d356() {
  try {
    Sizzle(`ins.adsbygoogle`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_059e0ce50319e966a4e2a3a22878d356 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_059e0ce50319e966a4e2a3a22878d356, function (items) {
  if (mudfish_adclean_g_conf_059e0ce50319e966a4e2a3a22878d356.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_059e0ce50319e966a4e2a3a22878d356();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_059e0ce50319e966a4e2a3a22878d356();
    });
  }
});
