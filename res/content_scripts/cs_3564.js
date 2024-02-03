
function mudfish_adclean_43de7c2af6fe9c536ace9200fafe8bc9() {
  try {
    Sizzle(`article div:not([class*=" "]) ~ div div + div[class*=" "]:has(iframe[id^="google_ads_"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_43de7c2af6fe9c536ace9200fafe8bc9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_43de7c2af6fe9c536ace9200fafe8bc9, function (items) {
  if (mudfish_adclean_g_conf_43de7c2af6fe9c536ace9200fafe8bc9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_43de7c2af6fe9c536ace9200fafe8bc9();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_43de7c2af6fe9c536ace9200fafe8bc9();
    });
  }
});
