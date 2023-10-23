
function mudfish_adclean_0bac19ecb9c54944c90a89c12507d659() {
  try {
    Sizzle(`.pop-area.--dim.--active`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0bac19ecb9c54944c90a89c12507d659 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0bac19ecb9c54944c90a89c12507d659, function (items) {
  if (mudfish_adclean_g_conf_0bac19ecb9c54944c90a89c12507d659.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0bac19ecb9c54944c90a89c12507d659();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0bac19ecb9c54944c90a89c12507d659();
    });
  }
});
