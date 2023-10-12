
function mudfish_adclean_d6a49134cbde4b60c4106e128142fdc2() {
  try {
    Sizzle(`.container >  div[style*="height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d6a49134cbde4b60c4106e128142fdc2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d6a49134cbde4b60c4106e128142fdc2, function (items) {
  if (mudfish_adclean_g_conf_d6a49134cbde4b60c4106e128142fdc2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d6a49134cbde4b60c4106e128142fdc2();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
