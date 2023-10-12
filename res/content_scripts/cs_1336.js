
function mudfish_adclean_830a33f421adc985709f9bd265e9008e() {
  try {
    Sizzle(`.et_bloom_popup`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_830a33f421adc985709f9bd265e9008e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_830a33f421adc985709f9bd265e9008e, function (items) {
  if (mudfish_adclean_g_conf_830a33f421adc985709f9bd265e9008e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_830a33f421adc985709f9bd265e9008e();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
