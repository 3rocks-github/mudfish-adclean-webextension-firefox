
function mudfish_adclean_c331a048990b34d82bc4689fa5f0bfe1() {
  try {
    Sizzle(`a[href^="/go/"][target="_blank"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c331a048990b34d82bc4689fa5f0bfe1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c331a048990b34d82bc4689fa5f0bfe1, function (items) {
  if (mudfish_adclean_g_conf_c331a048990b34d82bc4689fa5f0bfe1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c331a048990b34d82bc4689fa5f0bfe1();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c331a048990b34d82bc4689fa5f0bfe1();
    });
  }
});
