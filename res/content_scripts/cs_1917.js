
function mudfish_adclean_685817dce014af653d73c33bf59c5eef() {
  try {
    Sizzle(`iframe[src^="/template/ads/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_685817dce014af653d73c33bf59c5eef = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_685817dce014af653d73c33bf59c5eef, function (items) {
  if (mudfish_adclean_g_conf_685817dce014af653d73c33bf59c5eef.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_685817dce014af653d73c33bf59c5eef();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
