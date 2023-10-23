
function mudfish_adclean_cff8afd22b9d4e208c13b9d5146684b1() {
  try {
    Sizzle(`.detail-top-lst li:has(a[href*="//addc.dcinside.com/"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cff8afd22b9d4e208c13b9d5146684b1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cff8afd22b9d4e208c13b9d5146684b1, function (items) {
  if (mudfish_adclean_g_conf_cff8afd22b9d4e208c13b9d5146684b1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cff8afd22b9d4e208c13b9d5146684b1();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_cff8afd22b9d4e208c13b9d5146684b1();
    });
  }
});
