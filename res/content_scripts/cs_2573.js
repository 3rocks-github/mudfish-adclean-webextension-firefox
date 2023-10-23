
function mudfish_adclean_a647a424475d2d5d75000bc1a3648119() {
  try {
    Sizzle(`ul > li:has(> a[href^="./ad_board/"]:contains(광고))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a647a424475d2d5d75000bc1a3648119 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a647a424475d2d5d75000bc1a3648119, function (items) {
  if (mudfish_adclean_g_conf_a647a424475d2d5d75000bc1a3648119.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a647a424475d2d5d75000bc1a3648119();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a647a424475d2d5d75000bc1a3648119();
    });
  }
});
