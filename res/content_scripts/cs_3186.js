
function mudfish_adclean_61f477d602ae8238f84f8feff78f60c0() {
  try {
    Sizzle(`#hd_pop`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_61f477d602ae8238f84f8feff78f60c0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_61f477d602ae8238f84f8feff78f60c0, function (items) {
  if (mudfish_adclean_g_conf_61f477d602ae8238f84f8feff78f60c0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_61f477d602ae8238f84f8feff78f60c0();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
