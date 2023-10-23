
function mudfish_adclean_427bcc0081dd8fa5df0b4fbf93cf60c3() {
  try {
    Sizzle(`div[style].border-shadow`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_427bcc0081dd8fa5df0b4fbf93cf60c3 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_427bcc0081dd8fa5df0b4fbf93cf60c3, function (items) {
  if (mudfish_adclean_g_conf_427bcc0081dd8fa5df0b4fbf93cf60c3.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_427bcc0081dd8fa5df0b4fbf93cf60c3();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_427bcc0081dd8fa5df0b4fbf93cf60c3();
    });
  }
});
