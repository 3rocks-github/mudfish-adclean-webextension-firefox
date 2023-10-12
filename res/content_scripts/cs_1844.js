
function mudfish_adclean_3471a3b8eb3d1929a99f58e1da73870c() {
  try {
    Sizzle(`img[class^="banner_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3471a3b8eb3d1929a99f58e1da73870c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3471a3b8eb3d1929a99f58e1da73870c, function (items) {
  if (mudfish_adclean_g_conf_3471a3b8eb3d1929a99f58e1da73870c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3471a3b8eb3d1929a99f58e1da73870c();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
