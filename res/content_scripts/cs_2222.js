
function mudfish_adclean_8572a7ebae9ef2ac4474420be4e72e7b() {
  try {
    Sizzle(`#journalist_card li`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8572a7ebae9ef2ac4474420be4e72e7b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8572a7ebae9ef2ac4474420be4e72e7b, function (items) {
  if (mudfish_adclean_g_conf_8572a7ebae9ef2ac4474420be4e72e7b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8572a7ebae9ef2ac4474420be4e72e7b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8572a7ebae9ef2ac4474420be4e72e7b();
    });
  }
});
