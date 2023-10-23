
function mudfish_adclean_c4af36326fdbcac1fc130573075770dd() {
  try {
    Sizzle(`.con_primary hr.skin_margin`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c4af36326fdbcac1fc130573075770dd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c4af36326fdbcac1fc130573075770dd, function (items) {
  if (mudfish_adclean_g_conf_c4af36326fdbcac1fc130573075770dd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c4af36326fdbcac1fc130573075770dd();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c4af36326fdbcac1fc130573075770dd();
    });
  }
});
