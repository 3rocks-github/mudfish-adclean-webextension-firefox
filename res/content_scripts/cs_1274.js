
function mudfish_adclean_43d61c56f10f911326ff717b1d5537d1() {
  try {
    Sizzle(`.aside > div[class^="side_"]:not([class*="account"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_43d61c56f10f911326ff717b1d5537d1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_43d61c56f10f911326ff717b1d5537d1, function (items) {
  if (mudfish_adclean_g_conf_43d61c56f10f911326ff717b1d5537d1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_43d61c56f10f911326ff717b1d5537d1();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
