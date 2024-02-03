
function mudfish_adclean_0cb88b3031c6106cdde71edab6ecbd10() {
  try {
    Sizzle(`#main > div[class*="-ad-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0cb88b3031c6106cdde71edab6ecbd10 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0cb88b3031c6106cdde71edab6ecbd10, function (items) {
  if (mudfish_adclean_g_conf_0cb88b3031c6106cdde71edab6ecbd10.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0cb88b3031c6106cdde71edab6ecbd10();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0cb88b3031c6106cdde71edab6ecbd10();
    });
  }
});
