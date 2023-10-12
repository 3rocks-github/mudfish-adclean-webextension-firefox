
function mudfish_adclean_97385e29e8ccde697098c79081d14635() {
  try {
    Sizzle(`.neo_top_center`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_97385e29e8ccde697098c79081d14635 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_97385e29e8ccde697098c79081d14635, function (items) {
  if (mudfish_adclean_g_conf_97385e29e8ccde697098c79081d14635.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_97385e29e8ccde697098c79081d14635();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
