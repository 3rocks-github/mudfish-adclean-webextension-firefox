
function mudfish_adclean_4077daa0debacefb6978f03b6451c510() {
  try {
    Sizzle(`section[class^="css-"] section[class^="css-"] > [class^="css-"]:is(:has(section > a[target="_blank"]), :has(> div[class^="media-area "])):contains( · AD):not(:has(section ~ section))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4077daa0debacefb6978f03b6451c510 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4077daa0debacefb6978f03b6451c510, function (items) {
  if (mudfish_adclean_g_conf_4077daa0debacefb6978f03b6451c510.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4077daa0debacefb6978f03b6451c510();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_4077daa0debacefb6978f03b6451c510();
    });
  }
});
