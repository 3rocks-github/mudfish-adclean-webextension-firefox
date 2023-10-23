
function mudfish_adclean_f98eca9cc0900bad9a9108194efbfdcf() {
  try {
    Sizzle(`ul[class] > li:has(> a[href^="/guarantee.php"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f98eca9cc0900bad9a9108194efbfdcf = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f98eca9cc0900bad9a9108194efbfdcf, function (items) {
  if (mudfish_adclean_g_conf_f98eca9cc0900bad9a9108194efbfdcf.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f98eca9cc0900bad9a9108194efbfdcf();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f98eca9cc0900bad9a9108194efbfdcf();
    });
  }
});
