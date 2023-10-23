
function mudfish_adclean_22413506abfbfb101fb5f84937545779() {
  try {
    Sizzle(`.left_bnr`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_22413506abfbfb101fb5f84937545779 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_22413506abfbfb101fb5f84937545779, function (items) {
  if (mudfish_adclean_g_conf_22413506abfbfb101fb5f84937545779.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_22413506abfbfb101fb5f84937545779();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_22413506abfbfb101fb5f84937545779();
    });
  }
});
