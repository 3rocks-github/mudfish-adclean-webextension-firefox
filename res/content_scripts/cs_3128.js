
function mudfish_adclean_1acc46cded4d26478b9b6b2652c8f692() {
  try {
    Sizzle(`.recommended_wrap`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1acc46cded4d26478b9b6b2652c8f692 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1acc46cded4d26478b9b6b2652c8f692, function (items) {
  if (mudfish_adclean_g_conf_1acc46cded4d26478b9b6b2652c8f692.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1acc46cded4d26478b9b6b2652c8f692();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
