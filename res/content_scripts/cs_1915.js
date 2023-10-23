
function mudfish_adclean_7e58d9b71c3621741aa1552247a537bf() {
  try {
    Sizzle(`section[class^="ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7e58d9b71c3621741aa1552247a537bf = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7e58d9b71c3621741aa1552247a537bf, function (items) {
  if (mudfish_adclean_g_conf_7e58d9b71c3621741aa1552247a537bf.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7e58d9b71c3621741aa1552247a537bf();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7e58d9b71c3621741aa1552247a537bf();
    });
  }
});
