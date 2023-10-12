
function mudfish_adclean_fb83ecd18b08234a273b2af255c5a47e() {
  try {
    Sizzle(`#advertising`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fb83ecd18b08234a273b2af255c5a47e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fb83ecd18b08234a273b2af255c5a47e, function (items) {
  if (mudfish_adclean_g_conf_fb83ecd18b08234a273b2af255c5a47e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fb83ecd18b08234a273b2af255c5a47e();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
