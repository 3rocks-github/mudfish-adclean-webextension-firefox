
function mudfish_adclean_287d25b0e087eff9705b6368685d2f44() {
  try {
    Sizzle(`header ~ header`).forEach(element => {
      element.style.marginTop = "50px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_287d25b0e087eff9705b6368685d2f44 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_287d25b0e087eff9705b6368685d2f44, function (items) {
  if (mudfish_adclean_g_conf_287d25b0e087eff9705b6368685d2f44.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_287d25b0e087eff9705b6368685d2f44();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
