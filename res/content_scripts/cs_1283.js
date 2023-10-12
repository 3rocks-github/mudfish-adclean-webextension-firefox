
function mudfish_adclean_2f25ce0a86951b0c475ec5b12b7e3e15() {
  try {
    Sizzle(`.nav_content > div[id$="_content"][class^="content_"] div[class^="post_"] > div[class^="view_center_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2f25ce0a86951b0c475ec5b12b7e3e15 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2f25ce0a86951b0c475ec5b12b7e3e15, function (items) {
  if (mudfish_adclean_g_conf_2f25ce0a86951b0c475ec5b12b7e3e15.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2f25ce0a86951b0c475ec5b12b7e3e15();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
