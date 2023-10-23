
function mudfish_adclean_56a21e71a1302792451c431d6ae806dc() {
  try {
    Sizzle(`div[id^="nbp_container"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_56a21e71a1302792451c431d6ae806dc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_56a21e71a1302792451c431d6ae806dc, function (items) {
  if (mudfish_adclean_g_conf_56a21e71a1302792451c431d6ae806dc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_56a21e71a1302792451c431d6ae806dc();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_56a21e71a1302792451c431d6ae806dc();
    });
  }
});
