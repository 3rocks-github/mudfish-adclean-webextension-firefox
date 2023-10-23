
function mudfish_adclean_097b44216ea60e5014307fc7e08efeb2() {
  try {
    Sizzle(`[data-postid].ultp-shortcode`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_097b44216ea60e5014307fc7e08efeb2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_097b44216ea60e5014307fc7e08efeb2, function (items) {
  if (mudfish_adclean_g_conf_097b44216ea60e5014307fc7e08efeb2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_097b44216ea60e5014307fc7e08efeb2();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_097b44216ea60e5014307fc7e08efeb2();
    });
  }
});
