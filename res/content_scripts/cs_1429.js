
function mudfish_adclean_52a93911a48756aff3d15fac61d91448() {
  try {
    Sizzle(`#article_conent > div[style].clearfix`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_52a93911a48756aff3d15fac61d91448 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_52a93911a48756aff3d15fac61d91448, function (items) {
  if (mudfish_adclean_g_conf_52a93911a48756aff3d15fac61d91448.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_52a93911a48756aff3d15fac61d91448();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_52a93911a48756aff3d15fac61d91448();
    });
  }
});
