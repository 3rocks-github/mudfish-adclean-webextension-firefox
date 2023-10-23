
function mudfish_adclean_d713fa424492d932f3decbe7a8e0d013() {
  try {
    Sizzle(`.custom-cont-page.custom-cont-page-head`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d713fa424492d932f3decbe7a8e0d013 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d713fa424492d932f3decbe7a8e0d013, function (items) {
  if (mudfish_adclean_g_conf_d713fa424492d932f3decbe7a8e0d013.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d713fa424492d932f3decbe7a8e0d013();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_d713fa424492d932f3decbe7a8e0d013();
    });
  }
});
