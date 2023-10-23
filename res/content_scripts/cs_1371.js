
function mudfish_adclean_968d285eba8891748925296dbfc18a6f() {
  try {
    Sizzle(`.right_btn`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_968d285eba8891748925296dbfc18a6f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_968d285eba8891748925296dbfc18a6f, function (items) {
  if (mudfish_adclean_g_conf_968d285eba8891748925296dbfc18a6f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_968d285eba8891748925296dbfc18a6f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_968d285eba8891748925296dbfc18a6f();
    });
  }
});
