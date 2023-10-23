
function mudfish_adclean_2b8b726ac778b869ec0cd25b83c6fadc() {
  try {
    Sizzle(`.wrap_home .section_spot .best_qna_wrap`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2b8b726ac778b869ec0cd25b83c6fadc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2b8b726ac778b869ec0cd25b83c6fadc, function (items) {
  if (mudfish_adclean_g_conf_2b8b726ac778b869ec0cd25b83c6fadc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2b8b726ac778b869ec0cd25b83c6fadc();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2b8b726ac778b869ec0cd25b83c6fadc();
    });
  }
});
