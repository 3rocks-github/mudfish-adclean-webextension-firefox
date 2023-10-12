
function mudfish_adclean_a0e0e2980d45887ceea85d697c5f9349() {
  try {
    Sizzle(`.nav_container > .content_main > div[class^="main_top_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a0e0e2980d45887ceea85d697c5f9349 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a0e0e2980d45887ceea85d697c5f9349, function (items) {
  if (mudfish_adclean_g_conf_a0e0e2980d45887ceea85d697c5f9349.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a0e0e2980d45887ceea85d697c5f9349();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
