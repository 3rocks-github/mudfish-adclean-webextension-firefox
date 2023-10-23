
function mudfish_adclean_45aaad8824b818ec20ee3272b08a7829() {
  try {
    Sizzle(`.article_wrap ~ div[class^="nwbx"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_45aaad8824b818ec20ee3272b08a7829 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_45aaad8824b818ec20ee3272b08a7829, function (items) {
  if (mudfish_adclean_g_conf_45aaad8824b818ec20ee3272b08a7829.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_45aaad8824b818ec20ee3272b08a7829();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_45aaad8824b818ec20ee3272b08a7829();
    });
  }
});
