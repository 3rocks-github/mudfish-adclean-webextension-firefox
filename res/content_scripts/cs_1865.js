
function mudfish_adclean_a560244b817bf1f069e7943383c2b0d9() {
  try {
    Sizzle(`#content > .sub_content > .board_view >  div[align="center"]:not([class]):not([id]):not([style])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a560244b817bf1f069e7943383c2b0d9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a560244b817bf1f069e7943383c2b0d9, function (items) {
  if (mudfish_adclean_g_conf_a560244b817bf1f069e7943383c2b0d9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a560244b817bf1f069e7943383c2b0d9();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
