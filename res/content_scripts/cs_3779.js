
function mudfish_adclean_74ae4cc654897be0f04e46b5142cd41a() {
  try {
    Sizzle(`div[class^="col-sm-"] > div:not([style]) .basic-post-gallery`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_74ae4cc654897be0f04e46b5142cd41a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_74ae4cc654897be0f04e46b5142cd41a, function (items) {
  if (mudfish_adclean_g_conf_74ae4cc654897be0f04e46b5142cd41a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_74ae4cc654897be0f04e46b5142cd41a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_74ae4cc654897be0f04e46b5142cd41a();
    });
  }
});
