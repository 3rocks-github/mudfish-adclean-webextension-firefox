
function mudfish_adclean_417454bd66794187afce4ca9725ad574() {
  try {
    Sizzle(`div[class*="_bnr"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_417454bd66794187afce4ca9725ad574 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_417454bd66794187afce4ca9725ad574, function (items) {
  if (mudfish_adclean_g_conf_417454bd66794187afce4ca9725ad574.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_417454bd66794187afce4ca9725ad574();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
