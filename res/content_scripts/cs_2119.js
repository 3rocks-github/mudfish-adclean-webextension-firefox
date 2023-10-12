
function mudfish_adclean_f235fb1c69ea7fd759de48a3d3867599() {
  try {
    Sizzle(`div[class$="-banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f235fb1c69ea7fd759de48a3d3867599 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f235fb1c69ea7fd759de48a3d3867599, function (items) {
  if (mudfish_adclean_g_conf_f235fb1c69ea7fd759de48a3d3867599.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f235fb1c69ea7fd759de48a3d3867599();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
