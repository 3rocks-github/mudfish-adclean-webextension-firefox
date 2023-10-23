
function mudfish_adclean_aac0a05562c168c2581cc5fdf0f7da63() {
  try {
    Sizzle(`.adrr`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_aac0a05562c168c2581cc5fdf0f7da63 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_aac0a05562c168c2581cc5fdf0f7da63, function (items) {
  if (mudfish_adclean_g_conf_aac0a05562c168c2581cc5fdf0f7da63.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_aac0a05562c168c2581cc5fdf0f7da63();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_aac0a05562c168c2581cc5fdf0f7da63();
    });
  }
});
