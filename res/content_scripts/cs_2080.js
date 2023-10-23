
function mudfish_adclean_6577457c98b3c83078551c24955b6f60() {
  try {
    Sizzle(`#hongboInfoList`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6577457c98b3c83078551c24955b6f60 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6577457c98b3c83078551c24955b6f60, function (items) {
  if (mudfish_adclean_g_conf_6577457c98b3c83078551c24955b6f60.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6577457c98b3c83078551c24955b6f60();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_6577457c98b3c83078551c24955b6f60();
    });
  }
});
