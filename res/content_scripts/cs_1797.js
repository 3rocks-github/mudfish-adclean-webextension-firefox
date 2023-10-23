
function mudfish_adclean_452055869dc4cc31dbcbab0dcb6d29e1() {
  try {
    Sizzle(`div[data-gg="{s1:shopping}"] h2 + div[class^="#banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_452055869dc4cc31dbcbab0dcb6d29e1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_452055869dc4cc31dbcbab0dcb6d29e1, function (items) {
  if (mudfish_adclean_g_conf_452055869dc4cc31dbcbab0dcb6d29e1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_452055869dc4cc31dbcbab0dcb6d29e1();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_452055869dc4cc31dbcbab0dcb6d29e1();
    });
  }
});
