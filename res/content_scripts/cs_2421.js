
function mudfish_adclean_2a7f3890f454ac3889cf58cf146bd8b0() {
  try {
    Sizzle(`#navigation-cnt > div[class][style]:has(~ div[style*="margin-bottom:"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2a7f3890f454ac3889cf58cf146bd8b0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2a7f3890f454ac3889cf58cf146bd8b0, function (items) {
  if (mudfish_adclean_g_conf_2a7f3890f454ac3889cf58cf146bd8b0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2a7f3890f454ac3889cf58cf146bd8b0();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2a7f3890f454ac3889cf58cf146bd8b0();
    });
  }
});
