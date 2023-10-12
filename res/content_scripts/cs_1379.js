
function mudfish_adclean_cd609943acd4cba82e791c244fc7d0de() {
  try {
    Sizzle(`#serContents div[align="left"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cd609943acd4cba82e791c244fc7d0de = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cd609943acd4cba82e791c244fc7d0de, function (items) {
  if (mudfish_adclean_g_conf_cd609943acd4cba82e791c244fc7d0de.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cd609943acd4cba82e791c244fc7d0de();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
