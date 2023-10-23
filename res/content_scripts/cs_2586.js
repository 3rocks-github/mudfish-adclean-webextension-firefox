
function mudfish_adclean_f9ebdfc9ad3053fb61d3d069dad81abe() {
  try {
    Sizzle(`a[target="_blank"][href^="http://"].menu-a:contains(보증토토)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f9ebdfc9ad3053fb61d3d069dad81abe = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f9ebdfc9ad3053fb61d3d069dad81abe, function (items) {
  if (mudfish_adclean_g_conf_f9ebdfc9ad3053fb61d3d069dad81abe.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f9ebdfc9ad3053fb61d3d069dad81abe();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f9ebdfc9ad3053fb61d3d069dad81abe();
    });
  }
});
