
function mudfish_adclean_18bb795ca5e597832a2743802d6911fd() {
  try {
    Sizzle(`.card:has( > .banner > a[href*="//ad.everytime.kr/"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_18bb795ca5e597832a2743802d6911fd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_18bb795ca5e597832a2743802d6911fd, function (items) {
  if (mudfish_adclean_g_conf_18bb795ca5e597832a2743802d6911fd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_18bb795ca5e597832a2743802d6911fd();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_18bb795ca5e597832a2743802d6911fd();
    });
  }
});
