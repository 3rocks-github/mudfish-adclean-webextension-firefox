
function mudfish_adclean_845882c81d666b379ad63c4378ce7766() {
  try {
    Sizzle(`div[class] > div[class^="post-style"] ~ .rn_block + hr`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_845882c81d666b379ad63c4378ce7766 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_845882c81d666b379ad63c4378ce7766, function (items) {
  if (mudfish_adclean_g_conf_845882c81d666b379ad63c4378ce7766.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_845882c81d666b379ad63c4378ce7766();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
