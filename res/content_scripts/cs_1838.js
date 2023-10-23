
function mudfish_adclean_1eec85c5fcfbb78632a030ccfd7f6127() {
  try {
    Sizzle(`.side-event-img`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1eec85c5fcfbb78632a030ccfd7f6127 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1eec85c5fcfbb78632a030ccfd7f6127, function (items) {
  if (mudfish_adclean_g_conf_1eec85c5fcfbb78632a030ccfd7f6127.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1eec85c5fcfbb78632a030ccfd7f6127();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_1eec85c5fcfbb78632a030ccfd7f6127();
    });
  }
});
