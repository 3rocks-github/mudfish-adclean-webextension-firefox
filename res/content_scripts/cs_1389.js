
function mudfish_adclean_02b9438ddd6863d4d287dbbe3c1e4e44() {
  try {
    Sizzle(`.rankListType > li[class][data-object*="&ad="]:not([data-object*="&ad=n&"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_02b9438ddd6863d4d287dbbe3c1e4e44 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_02b9438ddd6863d4d287dbbe3c1e4e44, function (items) {
  if (mudfish_adclean_g_conf_02b9438ddd6863d4d287dbbe3c1e4e44.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_02b9438ddd6863d4d287dbbe3c1e4e44();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_02b9438ddd6863d4d287dbbe3c1e4e44();
    });
  }
});
