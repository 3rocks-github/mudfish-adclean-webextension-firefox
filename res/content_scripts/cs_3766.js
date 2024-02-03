
function mudfish_adclean_655ad4e88b7ab0233a6dbc0d9c7a6a98() {
  try {
    Sizzle(`.hd_pops`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_655ad4e88b7ab0233a6dbc0d9c7a6a98 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_655ad4e88b7ab0233a6dbc0d9c7a6a98, function (items) {
  if (mudfish_adclean_g_conf_655ad4e88b7ab0233a6dbc0d9c7a6a98.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_655ad4e88b7ab0233a6dbc0d9c7a6a98();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_655ad4e88b7ab0233a6dbc0d9c7a6a98();
    });
  }
});
