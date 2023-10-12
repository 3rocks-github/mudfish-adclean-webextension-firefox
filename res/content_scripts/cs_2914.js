
function mudfish_adclean_03b51e71a5afd573e76e03aab6a6d170() {
  try {
    Sizzle(`.banner_control_inner li[data-target="#75"].banner_group_item`).forEach(element => {
      element.style.remove = "true";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_03b51e71a5afd573e76e03aab6a6d170 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_03b51e71a5afd573e76e03aab6a6d170, function (items) {
  if (mudfish_adclean_g_conf_03b51e71a5afd573e76e03aab6a6d170.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_03b51e71a5afd573e76e03aab6a6d170();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
