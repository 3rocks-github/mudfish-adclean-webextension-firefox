
function mudfish_adclean_157cdae3baf98c83d0d14c23c4b48fb9() {
  try {
    Sizzle(`.payment_fullbnr`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_157cdae3baf98c83d0d14c23c4b48fb9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_157cdae3baf98c83d0d14c23c4b48fb9, function (items) {
  if (mudfish_adclean_g_conf_157cdae3baf98c83d0d14c23c4b48fb9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_157cdae3baf98c83d0d14c23c4b48fb9();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_157cdae3baf98c83d0d14c23c4b48fb9();
    });
  }
});
