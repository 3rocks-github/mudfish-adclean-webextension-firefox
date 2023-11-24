
function mudfish_adclean_4da741704c2e7c184d8debd6a7ec9db4() {
  try {
    Sizzle(`section[class*="_ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4da741704c2e7c184d8debd6a7ec9db4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4da741704c2e7c184d8debd6a7ec9db4, function (items) {
  if (mudfish_adclean_g_conf_4da741704c2e7c184d8debd6a7ec9db4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4da741704c2e7c184d8debd6a7ec9db4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_4da741704c2e7c184d8debd6a7ec9db4();
    });
  }
});
