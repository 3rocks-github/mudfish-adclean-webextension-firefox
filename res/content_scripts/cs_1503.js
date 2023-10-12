
function mudfish_adclean_27f8376db76ae83dd1b7d75431758568() {
  try {
    Sizzle(`div[class] > div[class^="post-style"] ~ .rn_block`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_27f8376db76ae83dd1b7d75431758568 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_27f8376db76ae83dd1b7d75431758568, function (items) {
  if (mudfish_adclean_g_conf_27f8376db76ae83dd1b7d75431758568.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_27f8376db76ae83dd1b7d75431758568();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
