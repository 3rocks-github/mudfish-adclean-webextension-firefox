
function mudfish_adclean_6c17d44e035b7890c4231b007af9b6e7() {
  try {
    Sizzle(`body div:is(.bd, .hd) div[style] > *[class*=" "]:matches-css(padding: /5px 10px 20px/):matches-css(height: /^[0-9]`).forEach(element => {
      element.style.2,3}/) { remove = "true";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6c17d44e035b7890c4231b007af9b6e7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6c17d44e035b7890c4231b007af9b6e7, function (items) {
  if (mudfish_adclean_g_conf_6c17d44e035b7890c4231b007af9b6e7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6c17d44e035b7890c4231b007af9b6e7();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_6c17d44e035b7890c4231b007af9b6e7();
    });
  }
});
