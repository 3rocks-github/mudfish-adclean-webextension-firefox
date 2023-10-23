
function mudfish_adclean_cc8bd097dc4266f3641537ce20c4a75e() {
  try {
    Sizzle(`#yWelMid .yWelPubBook`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cc8bd097dc4266f3641537ce20c4a75e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cc8bd097dc4266f3641537ce20c4a75e, function (items) {
  if (mudfish_adclean_g_conf_cc8bd097dc4266f3641537ce20c4a75e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cc8bd097dc4266f3641537ce20c4a75e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_cc8bd097dc4266f3641537ce20c4a75e();
    });
  }
});
