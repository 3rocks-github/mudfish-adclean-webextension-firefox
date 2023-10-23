
function mudfish_adclean_336a68a10221b029ba65da77bb27937b() {
  try {
    Sizzle(`.content_sponsor`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_336a68a10221b029ba65da77bb27937b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_336a68a10221b029ba65da77bb27937b, function (items) {
  if (mudfish_adclean_g_conf_336a68a10221b029ba65da77bb27937b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_336a68a10221b029ba65da77bb27937b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_336a68a10221b029ba65da77bb27937b();
    });
  }
});
