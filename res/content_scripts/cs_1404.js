
function mudfish_adclean_241ee001da278be2ff6302ce4ccf857e() {
  try {
    Sizzle(`div[id^="sidead"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_241ee001da278be2ff6302ce4ccf857e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_241ee001da278be2ff6302ce4ccf857e, function (items) {
  if (mudfish_adclean_g_conf_241ee001da278be2ff6302ce4ccf857e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_241ee001da278be2ff6302ce4ccf857e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_241ee001da278be2ff6302ce4ccf857e();
    });
  }
});
