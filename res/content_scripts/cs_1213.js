
function mudfish_adclean_a01afe5f70bb784b62a93987a848ae10() {
  try {
    Sizzle(`div[class^="gdn_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a01afe5f70bb784b62a93987a848ae10 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a01afe5f70bb784b62a93987a848ae10, function (items) {
  if (mudfish_adclean_g_conf_a01afe5f70bb784b62a93987a848ae10.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a01afe5f70bb784b62a93987a848ae10();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a01afe5f70bb784b62a93987a848ae10();
    });
  }
});
