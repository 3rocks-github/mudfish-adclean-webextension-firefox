
function mudfish_adclean_d253dd1d15166db1923a6a7b1eb4104f() {
  try {
    Sizzle(`header > div[style].wrap`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d253dd1d15166db1923a6a7b1eb4104f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d253dd1d15166db1923a6a7b1eb4104f, function (items) {
  if (mudfish_adclean_g_conf_d253dd1d15166db1923a6a7b1eb4104f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d253dd1d15166db1923a6a7b1eb4104f();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
