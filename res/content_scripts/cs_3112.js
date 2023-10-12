
function mudfish_adclean_e987873768072b679f78ec512becb0d2() {
  try {
    Sizzle(`.poketory_sidebar > b`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e987873768072b679f78ec512becb0d2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e987873768072b679f78ec512becb0d2, function (items) {
  if (mudfish_adclean_g_conf_e987873768072b679f78ec512becb0d2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e987873768072b679f78ec512becb0d2();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
