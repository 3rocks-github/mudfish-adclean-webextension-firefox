
function mudfish_adclean_2cba2c70b83620c06417d87eee9bad21() {
  try {
    Sizzle(`#wrap_mdd ~ div[style*="height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2cba2c70b83620c06417d87eee9bad21 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2cba2c70b83620c06417d87eee9bad21, function (items) {
  if (mudfish_adclean_g_conf_2cba2c70b83620c06417d87eee9bad21.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2cba2c70b83620c06417d87eee9bad21();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2cba2c70b83620c06417d87eee9bad21();
    });
  }
});
