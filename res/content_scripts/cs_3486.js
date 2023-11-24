
function mudfish_adclean_b4ff53de094834bc6b21239c695eb8ca() {
  try {
    Sizzle(`div[class$="-ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b4ff53de094834bc6b21239c695eb8ca = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b4ff53de094834bc6b21239c695eb8ca, function (items) {
  if (mudfish_adclean_g_conf_b4ff53de094834bc6b21239c695eb8ca.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b4ff53de094834bc6b21239c695eb8ca();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b4ff53de094834bc6b21239c695eb8ca();
    });
  }
});
