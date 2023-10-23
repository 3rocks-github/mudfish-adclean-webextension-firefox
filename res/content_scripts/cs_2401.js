
function mudfish_adclean_271c380daf7ea75bd42d4f858e060aee() {
  try {
    Sizzle(`div[class*="_contentBody"] main > .undefined:has(> div[class*="_Banner_"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_271c380daf7ea75bd42d4f858e060aee = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_271c380daf7ea75bd42d4f858e060aee, function (items) {
  if (mudfish_adclean_g_conf_271c380daf7ea75bd42d4f858e060aee.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_271c380daf7ea75bd42d4f858e060aee();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_271c380daf7ea75bd42d4f858e060aee();
    });
  }
});
