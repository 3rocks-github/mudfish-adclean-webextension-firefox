
function mudfish_adclean_9719ecf84c3d0941b119a3e3acbe7ed9() {
  try {
    Sizzle(`#content-header ~ div[class^="css-"][class*=" "]:has(div[id^="div-gpt-ad-"]):not(:has(#content-container)):not(#content-container)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9719ecf84c3d0941b119a3e3acbe7ed9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9719ecf84c3d0941b119a3e3acbe7ed9, function (items) {
  if (mudfish_adclean_g_conf_9719ecf84c3d0941b119a3e3acbe7ed9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9719ecf84c3d0941b119a3e3acbe7ed9();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9719ecf84c3d0941b119a3e3acbe7ed9();
    });
  }
});
