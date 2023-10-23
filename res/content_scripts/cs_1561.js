
function mudfish_adclean_d32ca87ec2b3fb9b0daab621e4760cb2() {
  try {
    Sizzle(`.space_layout ~ div[class^="section_"] > div:not([style*="solid"]) + div[style]:not([class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d32ca87ec2b3fb9b0daab621e4760cb2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d32ca87ec2b3fb9b0daab621e4760cb2, function (items) {
  if (mudfish_adclean_g_conf_d32ca87ec2b3fb9b0daab621e4760cb2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d32ca87ec2b3fb9b0daab621e4760cb2();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_d32ca87ec2b3fb9b0daab621e4760cb2();
    });
  }
});
