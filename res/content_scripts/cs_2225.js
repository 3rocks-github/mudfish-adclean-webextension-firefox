
function mudfish_adclean_40b27c2f800c040e444d6e70d43b6a8e() {
  try {
    Sizzle(`html:not([data-n-head]) .contents > .headline`).forEach(element => {
      element.style.marginTop = "0px !important";
element.style.height = "70px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_40b27c2f800c040e444d6e70d43b6a8e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_40b27c2f800c040e444d6e70d43b6a8e, function (items) {
  if (mudfish_adclean_g_conf_40b27c2f800c040e444d6e70d43b6a8e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_40b27c2f800c040e444d6e70d43b6a8e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_40b27c2f800c040e444d6e70d43b6a8e();
    });
  }
});
