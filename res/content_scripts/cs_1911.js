
function mudfish_adclean_c6d790c706332968d4c86be1d1b5993b() {
  try {
    Sizzle(`article > .article > div[class][style~="100%;"][style~="250px;"][style~="padding:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c6d790c706332968d4c86be1d1b5993b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c6d790c706332968d4c86be1d1b5993b, function (items) {
  if (mudfish_adclean_g_conf_c6d790c706332968d4c86be1d1b5993b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c6d790c706332968d4c86be1d1b5993b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
