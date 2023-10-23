
function mudfish_adclean_b43be8749bf56d3049d27540649dcce3() {
  try {
    Sizzle(`body.nate .section_cont [disp-attr] > #specialMColl`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b43be8749bf56d3049d27540649dcce3 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b43be8749bf56d3049d27540649dcce3, function (items) {
  if (mudfish_adclean_g_conf_b43be8749bf56d3049d27540649dcce3.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b43be8749bf56d3049d27540649dcce3();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b43be8749bf56d3049d27540649dcce3();
    });
  }
});
