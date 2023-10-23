
function mudfish_adclean_2d3ffd55831b221223b585d7dcbd85c3() {
  try {
    Sizzle(`div[class*="-ContentSections"] div[class^="css-"] section:has(section[class*="-ContentSection"] div[class*="-AdContainer"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2d3ffd55831b221223b585d7dcbd85c3 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2d3ffd55831b221223b585d7dcbd85c3, function (items) {
  if (mudfish_adclean_g_conf_2d3ffd55831b221223b585d7dcbd85c3.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2d3ffd55831b221223b585d7dcbd85c3();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2d3ffd55831b221223b585d7dcbd85c3();
    });
  }
});
