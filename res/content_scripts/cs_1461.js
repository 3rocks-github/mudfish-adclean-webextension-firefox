
function mudfish_adclean_79a045a3061dc02d5caf5a0c8690e64e() {
  try {
    Sizzle(`#container > div#rightContents > div[style*="height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_79a045a3061dc02d5caf5a0c8690e64e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_79a045a3061dc02d5caf5a0c8690e64e, function (items) {
  if (mudfish_adclean_g_conf_79a045a3061dc02d5caf5a0c8690e64e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_79a045a3061dc02d5caf5a0c8690e64e();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
