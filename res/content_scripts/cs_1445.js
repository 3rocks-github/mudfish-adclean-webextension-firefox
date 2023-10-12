
function mudfish_adclean_65c124ae67d589bbc9872d94cc7ca860() {
  try {
    Sizzle(`div[class^="box__layer-"][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_65c124ae67d589bbc9872d94cc7ca860 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_65c124ae67d589bbc9872d94cc7ca860, function (items) {
  if (mudfish_adclean_g_conf_65c124ae67d589bbc9872d94cc7ca860.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_65c124ae67d589bbc9872d94cc7ca860();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
