
function mudfish_adclean_bf568395bc0ce43281cf1a01598f6fe3() {
  try {
    Sizzle(`section.gall-lst-group > ul > li:has(> div.detail-top-lnk > a[href*="//addc.dcinside.com/"].lt > span:contains(AD))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bf568395bc0ce43281cf1a01598f6fe3 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bf568395bc0ce43281cf1a01598f6fe3, function (items) {
  if (mudfish_adclean_g_conf_bf568395bc0ce43281cf1a01598f6fe3.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bf568395bc0ce43281cf1a01598f6fe3();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_bf568395bc0ce43281cf1a01598f6fe3();
    });
  }
});
