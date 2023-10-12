
function mudfish_adclean_ff306f52b202893513d4bb1cb96f772c() {
  try {
    Sizzle(`#adBlockPixelTag`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ff306f52b202893513d4bb1cb96f772c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ff306f52b202893513d4bb1cb96f772c, function (items) {
  if (mudfish_adclean_g_conf_ff306f52b202893513d4bb1cb96f772c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ff306f52b202893513d4bb1cb96f772c();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
