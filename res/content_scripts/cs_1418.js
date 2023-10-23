
function mudfish_adclean_2b0e8ff70ffff0783715b86caca269ee() {
  try {
    Sizzle(`aside > article ~ div[style*="height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2b0e8ff70ffff0783715b86caca269ee = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2b0e8ff70ffff0783715b86caca269ee, function (items) {
  if (mudfish_adclean_g_conf_2b0e8ff70ffff0783715b86caca269ee.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2b0e8ff70ffff0783715b86caca269ee();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2b0e8ff70ffff0783715b86caca269ee();
    });
  }
});
