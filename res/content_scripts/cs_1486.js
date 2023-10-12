
function mudfish_adclean_498d24034901ff7ab0468e4d6abe4a57() {
  try {
    Sizzle(`div[style] > hr.spc`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_498d24034901ff7ab0468e4d6abe4a57 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_498d24034901ff7ab0468e4d6abe4a57, function (items) {
  if (mudfish_adclean_g_conf_498d24034901ff7ab0468e4d6abe4a57.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_498d24034901ff7ab0468e4d6abe4a57();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
