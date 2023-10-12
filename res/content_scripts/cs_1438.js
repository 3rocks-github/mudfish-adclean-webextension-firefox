
function mudfish_adclean_7a19cf2750bd86a3030c0afeab7bbb1c() {
  try {
    Sizzle(`.sticky-content-spacer_sub > div[style*="width:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7a19cf2750bd86a3030c0afeab7bbb1c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7a19cf2750bd86a3030c0afeab7bbb1c, function (items) {
  if (mudfish_adclean_g_conf_7a19cf2750bd86a3030c0afeab7bbb1c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7a19cf2750bd86a3030c0afeab7bbb1c();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
