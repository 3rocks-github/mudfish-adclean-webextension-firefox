
function mudfish_adclean_48da2c3667c7cde0eb59feb37c6ede8b() {
  try {
    Sizzle(`#googleTop`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_48da2c3667c7cde0eb59feb37c6ede8b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_48da2c3667c7cde0eb59feb37c6ede8b, function (items) {
  if (mudfish_adclean_g_conf_48da2c3667c7cde0eb59feb37c6ede8b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_48da2c3667c7cde0eb59feb37c6ede8b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_48da2c3667c7cde0eb59feb37c6ede8b();
    });
  }
});
