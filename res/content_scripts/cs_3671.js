
function mudfish_adclean_6626bd5b595c72fdbf71b8481ac1797e() {
  try {
    Sizzle(`div[class*="_banner_"][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6626bd5b595c72fdbf71b8481ac1797e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6626bd5b595c72fdbf71b8481ac1797e, function (items) {
  if (mudfish_adclean_g_conf_6626bd5b595c72fdbf71b8481ac1797e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6626bd5b595c72fdbf71b8481ac1797e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_6626bd5b595c72fdbf71b8481ac1797e();
    });
  }
});
