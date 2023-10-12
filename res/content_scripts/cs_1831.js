
function mudfish_adclean_2fee0ebc456c38732be80048c29dbdbd() {
  try {
    Sizzle(`article > div[style]:not([class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2fee0ebc456c38732be80048c29dbdbd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2fee0ebc456c38732be80048c29dbdbd, function (items) {
  if (mudfish_adclean_g_conf_2fee0ebc456c38732be80048c29dbdbd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2fee0ebc456c38732be80048c29dbdbd();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
