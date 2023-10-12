
function mudfish_adclean_d87da6340ffc321f1a05ff799f04f673() {
  try {
    Sizzle(`.ly_subb`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d87da6340ffc321f1a05ff799f04f673 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d87da6340ffc321f1a05ff799f04f673, function (items) {
  if (mudfish_adclean_g_conf_d87da6340ffc321f1a05ff799f04f673.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d87da6340ffc321f1a05ff799f04f673();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
