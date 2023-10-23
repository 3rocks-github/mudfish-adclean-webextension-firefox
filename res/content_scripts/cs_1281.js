
function mudfish_adclean_2cefa6615a3c74beb7b92d09ab263b7e() {
  try {
    Sizzle(`.nav_container > div[id$="_content"][class^="content_"] .contents_main > div[class^="main_center_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2cefa6615a3c74beb7b92d09ab263b7e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2cefa6615a3c74beb7b92d09ab263b7e, function (items) {
  if (mudfish_adclean_g_conf_2cefa6615a3c74beb7b92d09ab263b7e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2cefa6615a3c74beb7b92d09ab263b7e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2cefa6615a3c74beb7b92d09ab263b7e();
    });
  }
});
