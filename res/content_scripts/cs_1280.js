
function mudfish_adclean_7533f71ebb8fd33cf13a4a8f969042d7() {
  try {
    Sizzle(`.nav_container > .content_main > div[class^="main_center_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7533f71ebb8fd33cf13a4a8f969042d7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7533f71ebb8fd33cf13a4a8f969042d7, function (items) {
  if (mudfish_adclean_g_conf_7533f71ebb8fd33cf13a4a8f969042d7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7533f71ebb8fd33cf13a4a8f969042d7();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
