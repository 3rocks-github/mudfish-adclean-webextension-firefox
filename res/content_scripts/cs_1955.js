
function mudfish_adclean_09d696ce4348994d784cf11370f355af() {
  try {
    Sizzle(`.article_view > .fl_fr`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_09d696ce4348994d784cf11370f355af = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_09d696ce4348994d784cf11370f355af, function (items) {
  if (mudfish_adclean_g_conf_09d696ce4348994d784cf11370f355af.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_09d696ce4348994d784cf11370f355af();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
