
function mudfish_adclean_97ac0b476490bb05a027437bfc4c27bb() {
  try {
    Sizzle(`.at-row .basic-post-gallery`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_97ac0b476490bb05a027437bfc4c27bb = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_97ac0b476490bb05a027437bfc4c27bb, function (items) {
  if (mudfish_adclean_g_conf_97ac0b476490bb05a027437bfc4c27bb.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_97ac0b476490bb05a027437bfc4c27bb();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
