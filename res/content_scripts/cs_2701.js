
function mudfish_adclean_63fb577e96095e09ee2f21c65452a0aa() {
  try {
    Sizzle(`.issueBn`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_63fb577e96095e09ee2f21c65452a0aa = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_63fb577e96095e09ee2f21c65452a0aa, function (items) {
  if (mudfish_adclean_g_conf_63fb577e96095e09ee2f21c65452a0aa.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_63fb577e96095e09ee2f21c65452a0aa();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_63fb577e96095e09ee2f21c65452a0aa();
    });
  }
});
