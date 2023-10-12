
function mudfish_adclean_12419f85d65dc60ce40f940e9f8f5ec2() {
  try {
    Sizzle(`html[class*="pc-size"] .side-area + .m-guide`).forEach(element => {
      element.style.marginBottom = "150px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_12419f85d65dc60ce40f940e9f8f5ec2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_12419f85d65dc60ce40f940e9f8f5ec2, function (items) {
  if (mudfish_adclean_g_conf_12419f85d65dc60ce40f940e9f8f5ec2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_12419f85d65dc60ce40f940e9f8f5ec2();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
