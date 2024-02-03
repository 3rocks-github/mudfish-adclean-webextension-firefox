
function mudfish_adclean_1ea1be6fef254794fd30169c0f876083() {
  try {
    Sizzle(`.row > .col-sm-12:has(a[href^="/bbs/board.php?bo_table=primium"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1ea1be6fef254794fd30169c0f876083 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1ea1be6fef254794fd30169c0f876083, function (items) {
  if (mudfish_adclean_g_conf_1ea1be6fef254794fd30169c0f876083.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1ea1be6fef254794fd30169c0f876083();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_1ea1be6fef254794fd30169c0f876083();
    });
  }
});
