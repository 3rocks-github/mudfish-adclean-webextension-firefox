
function mudfish_adclean_d4a9131579cbc8a5844f9e75140c78d1() {
  try {
    Sizzle(`[class^="img_wrapper"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d4a9131579cbc8a5844f9e75140c78d1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d4a9131579cbc8a5844f9e75140c78d1, function (items) {
  if (mudfish_adclean_g_conf_d4a9131579cbc8a5844f9e75140c78d1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d4a9131579cbc8a5844f9e75140c78d1();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
