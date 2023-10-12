
function mudfish_adclean_2d650a132b6a04d9001184a39e767375() {
  try {
    Sizzle(`.row.relative .main_aside:has(div.aside_background + div[id^="ad_main"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2d650a132b6a04d9001184a39e767375 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2d650a132b6a04d9001184a39e767375, function (items) {
  if (mudfish_adclean_g_conf_2d650a132b6a04d9001184a39e767375.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2d650a132b6a04d9001184a39e767375();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
