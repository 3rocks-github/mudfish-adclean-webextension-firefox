
function mudfish_adclean_c5375b8fc2ffd219810d558201a3722a() {
  try {
    Sizzle(`.side > .widget_div > .content > center`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c5375b8fc2ffd219810d558201a3722a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c5375b8fc2ffd219810d558201a3722a, function (items) {
  if (mudfish_adclean_g_conf_c5375b8fc2ffd219810d558201a3722a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c5375b8fc2ffd219810d558201a3722a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
