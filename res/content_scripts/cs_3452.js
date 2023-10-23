
function mudfish_adclean_f21c649595ac4d47492db38b88566eaa() {
  try {
    Sizzle(`body`).forEach(element => {
      element.style.overflowX = "auto !important";
element.style.overflowY = "auto !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f21c649595ac4d47492db38b88566eaa = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f21c649595ac4d47492db38b88566eaa, function (items) {
  if (mudfish_adclean_g_conf_f21c649595ac4d47492db38b88566eaa.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f21c649595ac4d47492db38b88566eaa();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f21c649595ac4d47492db38b88566eaa();
    });
  }
});
