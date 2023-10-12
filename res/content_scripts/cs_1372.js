
function mudfish_adclean_e7866ae265b6663fcd6187640704ea3e() {
  try {
    Sizzle(`.game_wrap ~ div[style*=" "]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e7866ae265b6663fcd6187640704ea3e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e7866ae265b6663fcd6187640704ea3e, function (items) {
  if (mudfish_adclean_g_conf_e7866ae265b6663fcd6187640704ea3e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e7866ae265b6663fcd6187640704ea3e();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
