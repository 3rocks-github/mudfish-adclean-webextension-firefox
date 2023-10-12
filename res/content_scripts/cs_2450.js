
function mudfish_adclean_4028d818f4fcca6ced20d49d5a4d597d() {
  try {
    Sizzle(`#article-view div[style].float-center div[class^="m-view-"]:not(:has(> article))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4028d818f4fcca6ced20d49d5a4d597d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4028d818f4fcca6ced20d49d5a4d597d, function (items) {
  if (mudfish_adclean_g_conf_4028d818f4fcca6ced20d49d5a4d597d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4028d818f4fcca6ced20d49d5a4d597d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
