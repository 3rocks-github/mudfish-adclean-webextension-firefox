
function mudfish_adclean_ac7c7356a12373376e43d95952a96d14() {
  try {
    Sizzle(`div[id^="SmartPhone_"][id$="_today"] .lists > li:before`).forEach(element => {
      element.style.paddingTop = "0px !important";
element.style.borderBottom = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ac7c7356a12373376e43d95952a96d14 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ac7c7356a12373376e43d95952a96d14, function (items) {
  if (mudfish_adclean_g_conf_ac7c7356a12373376e43d95952a96d14.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ac7c7356a12373376e43d95952a96d14();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ac7c7356a12373376e43d95952a96d14();
    });
  }
});
