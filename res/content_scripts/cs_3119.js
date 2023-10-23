
function mudfish_adclean_605d5c7be362642d9e50d521a84bd93b() {
  try {
    Sizzle(`.productSortingList > .choice`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_605d5c7be362642d9e50d521a84bd93b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_605d5c7be362642d9e50d521a84bd93b, function (items) {
  if (mudfish_adclean_g_conf_605d5c7be362642d9e50d521a84bd93b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_605d5c7be362642d9e50d521a84bd93b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_605d5c7be362642d9e50d521a84bd93b();
    });
  }
});
