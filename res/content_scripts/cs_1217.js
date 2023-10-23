
function mudfish_adclean_b955948fa822cb42fbdb1ea4bfc031f0() {
  try {
    Sizzle(`.mounted .cont_wrap .right_area > div:not([class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b955948fa822cb42fbdb1ea4bfc031f0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b955948fa822cb42fbdb1ea4bfc031f0, function (items) {
  if (mudfish_adclean_g_conf_b955948fa822cb42fbdb1ea4bfc031f0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b955948fa822cb42fbdb1ea4bfc031f0();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b955948fa822cb42fbdb1ea4bfc031f0();
    });
  }
});
