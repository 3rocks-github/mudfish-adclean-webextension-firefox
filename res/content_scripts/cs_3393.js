
function mudfish_adclean_9d6572838b3d67327817c39d2eb8f28e() {
  try {
    Sizzle(`.article_view ~ div[style^="width:"].clean_banner ~ .wcms_banner ~ .h50`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9d6572838b3d67327817c39d2eb8f28e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9d6572838b3d67327817c39d2eb8f28e, function (items) {
  if (mudfish_adclean_g_conf_9d6572838b3d67327817c39d2eb8f28e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9d6572838b3d67327817c39d2eb8f28e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9d6572838b3d67327817c39d2eb8f28e();
    });
  }
});
