
function mudfish_adclean_636229a49c94458bd21d73e7ca141ede() {
  try {
    Sizzle(`.banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_636229a49c94458bd21d73e7ca141ede = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_636229a49c94458bd21d73e7ca141ede, function (items) {
  if (mudfish_adclean_g_conf_636229a49c94458bd21d73e7ca141ede.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_636229a49c94458bd21d73e7ca141ede();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_636229a49c94458bd21d73e7ca141ede();
    });
  }
});
