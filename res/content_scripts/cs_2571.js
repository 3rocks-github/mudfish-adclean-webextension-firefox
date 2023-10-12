
function mudfish_adclean_3c4a67864b46a483b49bbac2722ae426() {
  try {
    Sizzle(`#right-sidebar > .inside-right-sidebar > div[class]:not(:contains(Hi there, I'm EGG.))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3c4a67864b46a483b49bbac2722ae426 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3c4a67864b46a483b49bbac2722ae426, function (items) {
  if (mudfish_adclean_g_conf_3c4a67864b46a483b49bbac2722ae426.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3c4a67864b46a483b49bbac2722ae426();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
