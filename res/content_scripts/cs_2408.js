
function mudfish_adclean_771f7a1049d6b9309ace791b07d26566() {
  try {
    Sizzle(`#user_data_lyr .bg_grey:has(a[href*="//addc.dcinside.com/"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_771f7a1049d6b9309ace791b07d26566 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_771f7a1049d6b9309ace791b07d26566, function (items) {
  if (mudfish_adclean_g_conf_771f7a1049d6b9309ace791b07d26566.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_771f7a1049d6b9309ace791b07d26566();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_771f7a1049d6b9309ace791b07d26566();
    });
  }
});
