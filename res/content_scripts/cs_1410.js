
function mudfish_adclean_2d023b0417ea5a45a5714ea5403136af() {
  try {
    Sizzle(`.row > div[class][id=""] ~ #Contents ~ div[style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2d023b0417ea5a45a5714ea5403136af = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2d023b0417ea5a45a5714ea5403136af, function (items) {
  if (mudfish_adclean_g_conf_2d023b0417ea5a45a5714ea5403136af.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2d023b0417ea5a45a5714ea5403136af();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2d023b0417ea5a45a5714ea5403136af();
    });
  }
});
