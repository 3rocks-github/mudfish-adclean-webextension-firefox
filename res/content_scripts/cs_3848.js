
function mudfish_adclean_e9493abd93883e8b9d6e1f91575725fa() {
  try {
    Sizzle(`#right-sticky > .specialRightArea ~ div[class][style*="height:"]:is(:has(> div[id^="dablewidget_"]), :not(:has(> *)), :has(> iframe[allow-popups][title][sandbox]))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e9493abd93883e8b9d6e1f91575725fa = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e9493abd93883e8b9d6e1f91575725fa, function (items) {
  if (mudfish_adclean_g_conf_e9493abd93883e8b9d6e1f91575725fa.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e9493abd93883e8b9d6e1f91575725fa();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e9493abd93883e8b9d6e1f91575725fa();
    });
  }
});
