
function mudfish_adclean_c2cbd2b2c1d05af4df46ca3b5a579181() {
  try {
    Sizzle(`img[id^="ad_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c2cbd2b2c1d05af4df46ca3b5a579181 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c2cbd2b2c1d05af4df46ca3b5a579181, function (items) {
  if (mudfish_adclean_g_conf_c2cbd2b2c1d05af4df46ca3b5a579181.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c2cbd2b2c1d05af4df46ca3b5a579181();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
