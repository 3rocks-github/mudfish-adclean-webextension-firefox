
function mudfish_adclean_e271cfdbfca588e5598330f9f221da40() {
  try {
    Sizzle(`table#mboard.mboard tr:not([id])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e271cfdbfca588e5598330f9f221da40 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e271cfdbfca588e5598330f9f221da40, function (items) {
  if (mudfish_adclean_g_conf_e271cfdbfca588e5598330f9f221da40.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e271cfdbfca588e5598330f9f221da40();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
