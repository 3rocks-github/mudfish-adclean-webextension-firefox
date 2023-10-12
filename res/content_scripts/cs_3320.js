
function mudfish_adclean_b59f80b91aac37efcc46b610dce91df0() {
  try {
    Sizzle(`.at-container .at-col div[style^="height:"]:not([class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b59f80b91aac37efcc46b610dce91df0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b59f80b91aac37efcc46b610dce91df0, function (items) {
  if (mudfish_adclean_g_conf_b59f80b91aac37efcc46b610dce91df0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b59f80b91aac37efcc46b610dce91df0();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
