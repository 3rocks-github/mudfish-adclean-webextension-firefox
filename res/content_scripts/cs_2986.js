
function mudfish_adclean_870866637b9f428c6d1fe334a01b5c42() {
  try {
    Sizzle(`div[data-id*="-ad-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_870866637b9f428c6d1fe334a01b5c42 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_870866637b9f428c6d1fe334a01b5c42, function (items) {
  if (mudfish_adclean_g_conf_870866637b9f428c6d1fe334a01b5c42.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_870866637b9f428c6d1fe334a01b5c42();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_870866637b9f428c6d1fe334a01b5c42();
    });
  }
});
