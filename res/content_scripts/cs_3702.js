
function mudfish_adclean_cc6ba14ad580bd9995569ad7f45dad7b() {
  try {
    Sizzle(`#content div[class^="ArticleDetail_section_"] > div[class^="MainNativeLab_wrap"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cc6ba14ad580bd9995569ad7f45dad7b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cc6ba14ad580bd9995569ad7f45dad7b, function (items) {
  if (mudfish_adclean_g_conf_cc6ba14ad580bd9995569ad7f45dad7b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cc6ba14ad580bd9995569ad7f45dad7b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_cc6ba14ad580bd9995569ad7f45dad7b();
    });
  }
});
