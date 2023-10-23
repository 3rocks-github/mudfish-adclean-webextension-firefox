
function mudfish_adclean_3edb0f6476680cb0df5a0ebce54d8dd0() {
  try {
    Sizzle(`div[module-design-id] ~ div > .type--smiledelivery:has(+ .type--general .section--advertisement) ~ .component.type--general:not(:has(~ .type--general .text--smiledelivery_slogan))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3edb0f6476680cb0df5a0ebce54d8dd0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3edb0f6476680cb0df5a0ebce54d8dd0, function (items) {
  if (mudfish_adclean_g_conf_3edb0f6476680cb0df5a0ebce54d8dd0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3edb0f6476680cb0df5a0ebce54d8dd0();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_3edb0f6476680cb0df5a0ebce54d8dd0();
    });
  }
});
