
function mudfish_adclean_6487b94e1f77d0fe85895deafdd0ea76() {
  try {
    Sizzle(`.productSortingList > .listTitle:has(a[aria-describedby^="adLayerChoice"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6487b94e1f77d0fe85895deafdd0ea76 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6487b94e1f77d0fe85895deafdd0ea76, function (items) {
  if (mudfish_adclean_g_conf_6487b94e1f77d0fe85895deafdd0ea76.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6487b94e1f77d0fe85895deafdd0ea76();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_6487b94e1f77d0fe85895deafdd0ea76();
    });
  }
});
