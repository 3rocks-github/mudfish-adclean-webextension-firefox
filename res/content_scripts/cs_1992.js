
function mudfish_adclean_6c07405d9e107b23b9746d8d643287ac() {
  try {
    Sizzle(`a[href^="https://www.dothome.co.kr/ad/"][target="new"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6c07405d9e107b23b9746d8d643287ac = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6c07405d9e107b23b9746d8d643287ac, function (items) {
  if (mudfish_adclean_g_conf_6c07405d9e107b23b9746d8d643287ac.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6c07405d9e107b23b9746d8d643287ac();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_6c07405d9e107b23b9746d8d643287ac();
    });
  }
});
