
function mudfish_adclean_d47a93b01d9ab689d803d50c38f7946b() {
  try {
    Sizzle(`table td[valign][width] table > tbody > tr:not([bgcolor]) > td[height]:has(a[target="_blank"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d47a93b01d9ab689d803d50c38f7946b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d47a93b01d9ab689d803d50c38f7946b, function (items) {
  if (mudfish_adclean_g_conf_d47a93b01d9ab689d803d50c38f7946b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d47a93b01d9ab689d803d50c38f7946b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_d47a93b01d9ab689d803d50c38f7946b();
    });
  }
});
