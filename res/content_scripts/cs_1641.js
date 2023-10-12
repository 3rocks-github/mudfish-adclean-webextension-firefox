
function mudfish_adclean_0899b99e26ec15efd7ecda65103e685e() {
  try {
    Sizzle(`div[class*="-banner-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0899b99e26ec15efd7ecda65103e685e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0899b99e26ec15efd7ecda65103e685e, function (items) {
  if (mudfish_adclean_g_conf_0899b99e26ec15efd7ecda65103e685e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0899b99e26ec15efd7ecda65103e685e();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
