
function mudfish_adclean_905f663a559e0bf2af752561c1c87b28() {
  try {
    Sizzle(`.header-center.cf > .header-center-imgbox > a > img[src*="//cdn.mule.co.kr/data/original/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_905f663a559e0bf2af752561c1c87b28 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_905f663a559e0bf2af752561c1c87b28, function (items) {
  if (mudfish_adclean_g_conf_905f663a559e0bf2af752561c1c87b28.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_905f663a559e0bf2af752561c1c87b28();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_905f663a559e0bf2af752561c1c87b28();
    });
  }
});
