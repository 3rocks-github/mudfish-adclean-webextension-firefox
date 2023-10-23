
function mudfish_adclean_3c960ac2f08cd5ead0d9d07948289e83() {
  try {
    Sizzle(`.section__main-power`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3c960ac2f08cd5ead0d9d07948289e83 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3c960ac2f08cd5ead0d9d07948289e83, function (items) {
  if (mudfish_adclean_g_conf_3c960ac2f08cd5ead0d9d07948289e83.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3c960ac2f08cd5ead0d9d07948289e83();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_3c960ac2f08cd5ead0d9d07948289e83();
    });
  }
});
