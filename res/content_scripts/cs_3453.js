
function mudfish_adclean_b8110049cb5d51eba26862d286343530() {
  try {
    Sizzle(`div[class^="Main_container_"] div:is([class^="PreorderMainCard_root_"], [class^="Main_cardWrap_"]):has(a[data-promo-name])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b8110049cb5d51eba26862d286343530 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b8110049cb5d51eba26862d286343530, function (items) {
  if (mudfish_adclean_g_conf_b8110049cb5d51eba26862d286343530.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b8110049cb5d51eba26862d286343530();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b8110049cb5d51eba26862d286343530();
    });
  }
});
