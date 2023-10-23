
function mudfish_adclean_b412908ed7fda0208151bf7dfeb3fee4() {
  try {
    Sizzle(`.article_area .list_r`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b412908ed7fda0208151bf7dfeb3fee4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b412908ed7fda0208151bf7dfeb3fee4, function (items) {
  if (mudfish_adclean_g_conf_b412908ed7fda0208151bf7dfeb3fee4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b412908ed7fda0208151bf7dfeb3fee4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b412908ed7fda0208151bf7dfeb3fee4();
    });
  }
});
