
function mudfish_adclean_65a2a4c27aa9fc879747a77334acf1f1() {
  try {
    Sizzle(`.is-hover a[href^="http"][target="_blank"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_65a2a4c27aa9fc879747a77334acf1f1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_65a2a4c27aa9fc879747a77334acf1f1, function (items) {
  if (mudfish_adclean_g_conf_65a2a4c27aa9fc879747a77334acf1f1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_65a2a4c27aa9fc879747a77334acf1f1();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_65a2a4c27aa9fc879747a77334acf1f1();
    });
  }
});
