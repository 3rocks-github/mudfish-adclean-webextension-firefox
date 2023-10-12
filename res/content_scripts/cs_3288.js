
function mudfish_adclean_c2573744530ea8512bd71135dbb5cf0c() {
  try {
    Sizzle(`.together_goods`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c2573744530ea8512bd71135dbb5cf0c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c2573744530ea8512bd71135dbb5cf0c, function (items) {
  if (mudfish_adclean_g_conf_c2573744530ea8512bd71135dbb5cf0c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c2573744530ea8512bd71135dbb5cf0c();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
