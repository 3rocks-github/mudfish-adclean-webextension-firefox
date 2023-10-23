
function mudfish_adclean_755d8dc0d9e3d77ad26f3be70d4c026e() {
  try {
    Sizzle(`.shopping_wrap div[class$="_ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_755d8dc0d9e3d77ad26f3be70d4c026e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_755d8dc0d9e3d77ad26f3be70d4c026e, function (items) {
  if (mudfish_adclean_g_conf_755d8dc0d9e3d77ad26f3be70d4c026e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_755d8dc0d9e3d77ad26f3be70d4c026e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_755d8dc0d9e3d77ad26f3be70d4c026e();
    });
  }
});
