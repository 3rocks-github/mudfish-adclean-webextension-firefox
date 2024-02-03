
function mudfish_adclean_46d73b42ce7f3b0062fbc889d5fba81c() {
  try {
    Sizzle(`.ad-form > .row > div[class^="col-md-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_46d73b42ce7f3b0062fbc889d5fba81c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_46d73b42ce7f3b0062fbc889d5fba81c, function (items) {
  if (mudfish_adclean_g_conf_46d73b42ce7f3b0062fbc889d5fba81c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_46d73b42ce7f3b0062fbc889d5fba81c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_46d73b42ce7f3b0062fbc889d5fba81c();
    });
  }
});
