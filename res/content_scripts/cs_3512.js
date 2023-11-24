
function mudfish_adclean_748a6af91d2f274d85d56fbae6c7d592() {
  try {
    Sizzle(`div[class*="-pad-top-"][class*="-margin-"][class*="-bg-grey-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_748a6af91d2f274d85d56fbae6c7d592 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_748a6af91d2f274d85d56fbae6c7d592, function (items) {
  if (mudfish_adclean_g_conf_748a6af91d2f274d85d56fbae6c7d592.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_748a6af91d2f274d85d56fbae6c7d592();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_748a6af91d2f274d85d56fbae6c7d592();
    });
  }
});
