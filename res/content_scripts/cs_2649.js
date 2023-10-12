
function mudfish_adclean_233b68c479defe9c66eb9f0d084b8d5b() {
  try {
    Sizzle(`.adblock-on`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_233b68c479defe9c66eb9f0d084b8d5b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_233b68c479defe9c66eb9f0d084b8d5b, function (items) {
  if (mudfish_adclean_g_conf_233b68c479defe9c66eb9f0d084b8d5b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_233b68c479defe9c66eb9f0d084b8d5b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
