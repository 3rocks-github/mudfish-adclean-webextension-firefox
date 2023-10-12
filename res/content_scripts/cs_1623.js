
function mudfish_adclean_419da19bbfd17cbdf0dbf989f23dbbc5() {
  try {
    Sizzle(`a[href^="/extcont/adclick.php"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_419da19bbfd17cbdf0dbf989f23dbbc5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_419da19bbfd17cbdf0dbf989f23dbbc5, function (items) {
  if (mudfish_adclean_g_conf_419da19bbfd17cbdf0dbf989f23dbbc5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_419da19bbfd17cbdf0dbf989f23dbbc5();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
