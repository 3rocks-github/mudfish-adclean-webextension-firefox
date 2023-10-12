
function mudfish_adclean_87824df739f6fe5ebf07965939eb5b9b() {
  try {
    Sizzle(`div[id^="ads_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_87824df739f6fe5ebf07965939eb5b9b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_87824df739f6fe5ebf07965939eb5b9b, function (items) {
  if (mudfish_adclean_g_conf_87824df739f6fe5ebf07965939eb5b9b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_87824df739f6fe5ebf07965939eb5b9b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
