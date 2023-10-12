
function mudfish_adclean_04d01b07180788f2350c7a59e92af0e9() {
  try {
    Sizzle(`.ad`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_04d01b07180788f2350c7a59e92af0e9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_04d01b07180788f2350c7a59e92af0e9, function (items) {
  if (mudfish_adclean_g_conf_04d01b07180788f2350c7a59e92af0e9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_04d01b07180788f2350c7a59e92af0e9();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
