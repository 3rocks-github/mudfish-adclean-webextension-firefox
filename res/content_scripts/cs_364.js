
function mudfish_adclean_1aae2c33ed6a0bd0053e693d19c2ac50() {
  try {
    Sizzle(`ul[class^="bbsList"] > div[style*="clear: both;"].sect0`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1aae2c33ed6a0bd0053e693d19c2ac50 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1aae2c33ed6a0bd0053e693d19c2ac50, function (items) {
  if (mudfish_adclean_g_conf_1aae2c33ed6a0bd0053e693d19c2ac50.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1aae2c33ed6a0bd0053e693d19c2ac50();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_1aae2c33ed6a0bd0053e693d19c2ac50();
    });
  }
});
