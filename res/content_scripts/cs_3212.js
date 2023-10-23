
function mudfish_adclean_c091857b160d667a598eb75ebd56c9b1() {
  try {
    Sizzle(`.navbar-nav > li[class]:has(> a[href$="/토토보증업체"][alt="토토보증업체"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c091857b160d667a598eb75ebd56c9b1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c091857b160d667a598eb75ebd56c9b1, function (items) {
  if (mudfish_adclean_g_conf_c091857b160d667a598eb75ebd56c9b1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c091857b160d667a598eb75ebd56c9b1();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c091857b160d667a598eb75ebd56c9b1();
    });
  }
});
