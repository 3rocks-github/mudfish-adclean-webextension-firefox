
function mudfish_adclean_471ce8bf422fcc0cc09fd9711690c7b8() {
  try {
    Sizzle(`pre > div[id]:has(> div[align] > a > img[src*="//img.postshare.co.kr/images/banner/"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_471ce8bf422fcc0cc09fd9711690c7b8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_471ce8bf422fcc0cc09fd9711690c7b8, function (items) {
  if (mudfish_adclean_g_conf_471ce8bf422fcc0cc09fd9711690c7b8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_471ce8bf422fcc0cc09fd9711690c7b8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_471ce8bf422fcc0cc09fd9711690c7b8();
    });
  }
});
