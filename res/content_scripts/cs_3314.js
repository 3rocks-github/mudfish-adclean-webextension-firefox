
function mudfish_adclean_007b362f9a72aa6c204c4e0938b98dd0() {
  try {
    Sizzle(`div[id^="adbox_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_007b362f9a72aa6c204c4e0938b98dd0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_007b362f9a72aa6c204c4e0938b98dd0, function (items) {
  if (mudfish_adclean_g_conf_007b362f9a72aa6c204c4e0938b98dd0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_007b362f9a72aa6c204c4e0938b98dd0();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
