
function mudfish_adclean_bd2ec71321c072d6aeccb026c893e645() {
  try {
    Sizzle(`._pl_section.ad_section`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bd2ec71321c072d6aeccb026c893e645 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bd2ec71321c072d6aeccb026c893e645, function (items) {
  if (mudfish_adclean_g_conf_bd2ec71321c072d6aeccb026c893e645.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bd2ec71321c072d6aeccb026c893e645();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_bd2ec71321c072d6aeccb026c893e645();
    });
  }
});
