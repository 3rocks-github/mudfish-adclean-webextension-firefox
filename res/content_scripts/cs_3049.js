
function mudfish_adclean_a95332c986fba913465a7ec9cb3fab7e() {
  try {
    Sizzle(`body > div[class][style*="box-shadow:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a95332c986fba913465a7ec9cb3fab7e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a95332c986fba913465a7ec9cb3fab7e, function (items) {
  if (mudfish_adclean_g_conf_a95332c986fba913465a7ec9cb3fab7e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a95332c986fba913465a7ec9cb3fab7e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a95332c986fba913465a7ec9cb3fab7e();
    });
  }
});
