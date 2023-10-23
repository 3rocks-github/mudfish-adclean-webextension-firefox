
function mudfish_adclean_0e93ba130cc05f890e35d85b95f93a12() {
  try {
    Sizzle(`.invenbanner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0e93ba130cc05f890e35d85b95f93a12 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0e93ba130cc05f890e35d85b95f93a12, function (items) {
  if (mudfish_adclean_g_conf_0e93ba130cc05f890e35d85b95f93a12.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0e93ba130cc05f890e35d85b95f93a12();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0e93ba130cc05f890e35d85b95f93a12();
    });
  }
});
