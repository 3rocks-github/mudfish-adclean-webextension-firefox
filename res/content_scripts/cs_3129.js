
function mudfish_adclean_fce561c56107fa386cc63e012ba4d814() {
  try {
    Sizzle(`.rangking_wrap`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fce561c56107fa386cc63e012ba4d814 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fce561c56107fa386cc63e012ba4d814, function (items) {
  if (mudfish_adclean_g_conf_fce561c56107fa386cc63e012ba4d814.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fce561c56107fa386cc63e012ba4d814();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
