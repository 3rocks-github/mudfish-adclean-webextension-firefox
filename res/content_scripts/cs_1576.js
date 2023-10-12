
function mudfish_adclean_2fd308802fc0243f6ff7545a1c10c6a6() {
  try {
    Sizzle(`#contentsBox #mainCon #top_area`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2fd308802fc0243f6ff7545a1c10c6a6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2fd308802fc0243f6ff7545a1c10c6a6, function (items) {
  if (mudfish_adclean_g_conf_2fd308802fc0243f6ff7545a1c10c6a6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2fd308802fc0243f6ff7545a1c10c6a6();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
