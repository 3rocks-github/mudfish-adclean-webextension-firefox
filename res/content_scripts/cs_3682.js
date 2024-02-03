
function mudfish_adclean_1b5e6fbf1d745a98985f71571d3319e2() {
  try {
    Sizzle(`aside > div[class*=" "]:has(iframe[id^="google_ads_"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1b5e6fbf1d745a98985f71571d3319e2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1b5e6fbf1d745a98985f71571d3319e2, function (items) {
  if (mudfish_adclean_g_conf_1b5e6fbf1d745a98985f71571d3319e2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1b5e6fbf1d745a98985f71571d3319e2();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_1b5e6fbf1d745a98985f71571d3319e2();
    });
  }
});
