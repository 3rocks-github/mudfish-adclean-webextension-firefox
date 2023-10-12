
function mudfish_adclean_635f65f30a935c6285adaab86f934564() {
  try {
    Sizzle(`.pdtl_cm_detail .md_software`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_635f65f30a935c6285adaab86f934564 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_635f65f30a935c6285adaab86f934564, function (items) {
  if (mudfish_adclean_g_conf_635f65f30a935c6285adaab86f934564.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_635f65f30a935c6285adaab86f934564();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
