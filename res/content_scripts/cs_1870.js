
function mudfish_adclean_c5bd303d977c7ec437a49e5f30378c06() {
  try {
    Sizzle(`div[id^="divEzad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c5bd303d977c7ec437a49e5f30378c06 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c5bd303d977c7ec437a49e5f30378c06, function (items) {
  if (mudfish_adclean_g_conf_c5bd303d977c7ec437a49e5f30378c06.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c5bd303d977c7ec437a49e5f30378c06();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
