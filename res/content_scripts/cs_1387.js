
function mudfish_adclean_ff4a5713ae7aad4dd9bcd0ec021f0f23() {
  try {
    Sizzle(`div[data-ads-url]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ff4a5713ae7aad4dd9bcd0ec021f0f23 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ff4a5713ae7aad4dd9bcd0ec021f0f23, function (items) {
  if (mudfish_adclean_g_conf_ff4a5713ae7aad4dd9bcd0ec021f0f23.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ff4a5713ae7aad4dd9bcd0ec021f0f23();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ff4a5713ae7aad4dd9bcd0ec021f0f23();
    });
  }
});
