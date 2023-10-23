
function mudfish_adclean_377f121b700c25d1f9de98f3fd389de3() {
  try {
    Sizzle(`div[style^="padding-bottom:"].img`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_377f121b700c25d1f9de98f3fd389de3 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_377f121b700c25d1f9de98f3fd389de3, function (items) {
  if (mudfish_adclean_g_conf_377f121b700c25d1f9de98f3fd389de3.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_377f121b700c25d1f9de98f3fd389de3();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_377f121b700c25d1f9de98f3fd389de3();
    });
  }
});
