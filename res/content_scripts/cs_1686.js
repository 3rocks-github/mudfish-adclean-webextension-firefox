
function mudfish_adclean_b4b411f2d4a42793d8341622757995b7() {
  try {
    Sizzle(`#articlebody > div[style]:not([itemprop="articleBody"]).article_content`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b4b411f2d4a42793d8341622757995b7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b4b411f2d4a42793d8341622757995b7, function (items) {
  if (mudfish_adclean_g_conf_b4b411f2d4a42793d8341622757995b7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b4b411f2d4a42793d8341622757995b7();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b4b411f2d4a42793d8341622757995b7();
    });
  }
});
