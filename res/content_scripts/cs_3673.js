
function mudfish_adclean_51c1695bf969da24aafb588d807e9947() {
  try {
    Sizzle(`#content ~ .edit_bottom li:has(.li_ad)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_51c1695bf969da24aafb588d807e9947 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_51c1695bf969da24aafb588d807e9947, function (items) {
  if (mudfish_adclean_g_conf_51c1695bf969da24aafb588d807e9947.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_51c1695bf969da24aafb588d807e9947();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_51c1695bf969da24aafb588d807e9947();
    });
  }
});
