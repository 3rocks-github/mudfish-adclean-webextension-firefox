
function mudfish_adclean_53be6df62cbe5387d0201ec2af422abb() {
  try {
    Sizzle(`.ent_wrapper.slide-vertical-effect .ent_news:not(:has(.ent_prefix:contains(ZZAPFLIX)))`).forEach(element => {
      element.style.remove = "true";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_53be6df62cbe5387d0201ec2af422abb = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_53be6df62cbe5387d0201ec2af422abb, function (items) {
  if (mudfish_adclean_g_conf_53be6df62cbe5387d0201ec2af422abb.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_53be6df62cbe5387d0201ec2af422abb();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_53be6df62cbe5387d0201ec2af422abb();
    });
  }
});
