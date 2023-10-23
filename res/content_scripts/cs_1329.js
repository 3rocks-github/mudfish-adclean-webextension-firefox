
function mudfish_adclean_f349ce775335b7235aef9333d4da1af4() {
  try {
    Sizzle(`.content .left-wing > div`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f349ce775335b7235aef9333d4da1af4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f349ce775335b7235aef9333d4da1af4, function (items) {
  if (mudfish_adclean_g_conf_f349ce775335b7235aef9333d4da1af4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f349ce775335b7235aef9333d4da1af4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f349ce775335b7235aef9333d4da1af4();
    });
  }
});
