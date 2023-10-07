
function mudfish_adclean_3edb0f6476680cb0df5a0ebce54d8dd0() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[module-design-id] ~ div > .type--smiledelivery:has(+ .type--general .section--advertisement) ~ .component.type--general:not(:has(~ .type--general .text--smiledelivery_slogan))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3edb0f6476680cb0df5a0ebce54d8dd0();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3edb0f6476680cb0df5a0ebce54d8dd0();
  });
}
