
function mudfish_adclean_c27e08bf3f17647a6489218ab9e55576() {
  try {
    Sizzle(`.articleTxtAD`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c27e08bf3f17647a6489218ab9e55576 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c27e08bf3f17647a6489218ab9e55576, function (items) {
  if (mudfish_adclean_g_conf_c27e08bf3f17647a6489218ab9e55576.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c27e08bf3f17647a6489218ab9e55576();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
