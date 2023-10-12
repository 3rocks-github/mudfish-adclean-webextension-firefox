
function mudfish_adclean_a525df432f15cca1680feccb245c4e5b() {
  try {
    Sizzle(`#div10Sticky`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a525df432f15cca1680feccb245c4e5b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a525df432f15cca1680feccb245c4e5b, function (items) {
  if (mudfish_adclean_g_conf_a525df432f15cca1680feccb245c4e5b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a525df432f15cca1680feccb245c4e5b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
