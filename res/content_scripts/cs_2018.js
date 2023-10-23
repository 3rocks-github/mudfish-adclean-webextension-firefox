
function mudfish_adclean_0443ffc722649816f6703ad61f9d4a65() {
  try {
    Sizzle(`.ad-template`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0443ffc722649816f6703ad61f9d4a65 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0443ffc722649816f6703ad61f9d4a65, function (items) {
  if (mudfish_adclean_g_conf_0443ffc722649816f6703ad61f9d4a65.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0443ffc722649816f6703ad61f9d4a65();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0443ffc722649816f6703ad61f9d4a65();
    });
  }
});
