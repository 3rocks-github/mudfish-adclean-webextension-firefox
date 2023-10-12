
function mudfish_adclean_5dc6aa5cc03e8695f6ff6fff059aa186() {
  try {
    Sizzle(`.content > ul.ad_area`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5dc6aa5cc03e8695f6ff6fff059aa186 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5dc6aa5cc03e8695f6ff6fff059aa186, function (items) {
  if (mudfish_adclean_g_conf_5dc6aa5cc03e8695f6ff6fff059aa186.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5dc6aa5cc03e8695f6ff6fff059aa186();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
