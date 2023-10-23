
function mudfish_adclean_b9e65f153cabddd4e326d1acc217a1f4() {
  try {
    Sizzle(`#searchArea #side_ad`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b9e65f153cabddd4e326d1acc217a1f4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b9e65f153cabddd4e326d1acc217a1f4, function (items) {
  if (mudfish_adclean_g_conf_b9e65f153cabddd4e326d1acc217a1f4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b9e65f153cabddd4e326d1acc217a1f4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b9e65f153cabddd4e326d1acc217a1f4();
    });
  }
});
