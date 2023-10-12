
function mudfish_adclean_a0f348168fe168f123d1f7aed1808fc5() {
  try {
    Sizzle(`div[id$="_banner"][class^="banner_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a0f348168fe168f123d1f7aed1808fc5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a0f348168fe168f123d1f7aed1808fc5, function (items) {
  if (mudfish_adclean_g_conf_a0f348168fe168f123d1f7aed1808fc5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a0f348168fe168f123d1f7aed1808fc5();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
