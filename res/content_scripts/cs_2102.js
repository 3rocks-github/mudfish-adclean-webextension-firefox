
function mudfish_adclean_99b9cbc8f6a1ae1c6e1da19eb152ab11() {
  try {
    Sizzle(`.w-banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_99b9cbc8f6a1ae1c6e1da19eb152ab11 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_99b9cbc8f6a1ae1c6e1da19eb152ab11, function (items) {
  if (mudfish_adclean_g_conf_99b9cbc8f6a1ae1c6e1da19eb152ab11.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_99b9cbc8f6a1ae1c6e1da19eb152ab11();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
