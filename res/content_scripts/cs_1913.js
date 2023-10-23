
function mudfish_adclean_80aab281466953fe7a42e9e405c7b573() {
  try {
    Sizzle(`div[class][data-ad-media][data-ad-pubuser][data-ad-type][data-ad-width][data-ad-height]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_80aab281466953fe7a42e9e405c7b573 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_80aab281466953fe7a42e9e405c7b573, function (items) {
  if (mudfish_adclean_g_conf_80aab281466953fe7a42e9e405c7b573.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_80aab281466953fe7a42e9e405c7b573();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_80aab281466953fe7a42e9e405c7b573();
    });
  }
});
