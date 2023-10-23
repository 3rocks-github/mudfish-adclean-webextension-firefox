
function mudfish_adclean_d0a7120ee87daff3fb1ab370a94d2757() {
  try {
    Sizzle(`#divMsnAD`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d0a7120ee87daff3fb1ab370a94d2757 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d0a7120ee87daff3fb1ab370a94d2757, function (items) {
  if (mudfish_adclean_g_conf_d0a7120ee87daff3fb1ab370a94d2757.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d0a7120ee87daff3fb1ab370a94d2757();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_d0a7120ee87daff3fb1ab370a94d2757();
    });
  }
});
