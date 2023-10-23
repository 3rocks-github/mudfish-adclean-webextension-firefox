
function mudfish_adclean_6ef23dfebf6a15a59c2ee59d6362853a() {
  try {
    Sizzle(`.comment_inbox ul > li[style^="padding:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6ef23dfebf6a15a59c2ee59d6362853a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6ef23dfebf6a15a59c2ee59d6362853a, function (items) {
  if (mudfish_adclean_g_conf_6ef23dfebf6a15a59c2ee59d6362853a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6ef23dfebf6a15a59c2ee59d6362853a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_6ef23dfebf6a15a59c2ee59d6362853a();
    });
  }
});
