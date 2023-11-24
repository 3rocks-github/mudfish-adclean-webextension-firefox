
function mudfish_adclean_607846f7b923320ab9d898e63e7237b7() {
  try {
    Sizzle(`a[href*="/bbs/link.php?bo_table=partner&"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_607846f7b923320ab9d898e63e7237b7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_607846f7b923320ab9d898e63e7237b7, function (items) {
  if (mudfish_adclean_g_conf_607846f7b923320ab9d898e63e7237b7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_607846f7b923320ab9d898e63e7237b7();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_607846f7b923320ab9d898e63e7237b7();
    });
  }
});
