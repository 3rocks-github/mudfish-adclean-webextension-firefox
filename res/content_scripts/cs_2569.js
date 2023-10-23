
function mudfish_adclean_4a0e81cb64ca3659d0000c7360bc2c49() {
  try {
    Sizzle(`div[style*="padding:"]:has(div[style] div[style]:contains(AD))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4a0e81cb64ca3659d0000c7360bc2c49 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4a0e81cb64ca3659d0000c7360bc2c49, function (items) {
  if (mudfish_adclean_g_conf_4a0e81cb64ca3659d0000c7360bc2c49.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4a0e81cb64ca3659d0000c7360bc2c49();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_4a0e81cb64ca3659d0000c7360bc2c49();
    });
  }
});
