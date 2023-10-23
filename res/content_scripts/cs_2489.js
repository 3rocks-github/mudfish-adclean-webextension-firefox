
function mudfish_adclean_84b8ad9d2deece9e03ce68d97ca87b4a() {
  try {
    Sizzle(`table[style][width][cellspacing][cellpadding] tr[valign] > td[style]:has(img[src^="/file/_banner/"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_84b8ad9d2deece9e03ce68d97ca87b4a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_84b8ad9d2deece9e03ce68d97ca87b4a, function (items) {
  if (mudfish_adclean_g_conf_84b8ad9d2deece9e03ce68d97ca87b4a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_84b8ad9d2deece9e03ce68d97ca87b4a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_84b8ad9d2deece9e03ce68d97ca87b4a();
    });
  }
});
