
function mudfish_adclean_db25e2a70cb0a176a56fb32964492786() {
  try {
    Sizzle(`tr.is_notice:has(span:contains((광고)))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_db25e2a70cb0a176a56fb32964492786 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_db25e2a70cb0a176a56fb32964492786, function (items) {
  if (mudfish_adclean_g_conf_db25e2a70cb0a176a56fb32964492786.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_db25e2a70cb0a176a56fb32964492786();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_db25e2a70cb0a176a56fb32964492786();
    });
  }
});
