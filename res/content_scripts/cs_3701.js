
function mudfish_adclean_010231871e90c799bff6015c89ae58c2() {
  try {
    Sizzle(`#adsense`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_010231871e90c799bff6015c89ae58c2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_010231871e90c799bff6015c89ae58c2, function (items) {
  if (mudfish_adclean_g_conf_010231871e90c799bff6015c89ae58c2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_010231871e90c799bff6015c89ae58c2();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_010231871e90c799bff6015c89ae58c2();
    });
  }
});
