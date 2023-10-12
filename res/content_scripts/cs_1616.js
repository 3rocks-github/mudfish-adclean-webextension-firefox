
function mudfish_adclean_3b2d6ef290ff3eb1145fb902ec625338() {
  try {
    Sizzle(`body.body-community div[class*="Car"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3b2d6ef290ff3eb1145fb902ec625338 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3b2d6ef290ff3eb1145fb902ec625338, function (items) {
  if (mudfish_adclean_g_conf_3b2d6ef290ff3eb1145fb902ec625338.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3b2d6ef290ff3eb1145fb902ec625338();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
