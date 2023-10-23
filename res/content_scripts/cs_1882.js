
function mudfish_adclean_89bc5dff7a6fb0b55d6948ec0dbed3ee() {
  try {
    Sizzle(`div[data-fonts-target="fontsContainer"] > div.group.min-h-auto:not(.duration-300):not(.justify-between)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_89bc5dff7a6fb0b55d6948ec0dbed3ee = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_89bc5dff7a6fb0b55d6948ec0dbed3ee, function (items) {
  if (mudfish_adclean_g_conf_89bc5dff7a6fb0b55d6948ec0dbed3ee.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_89bc5dff7a6fb0b55d6948ec0dbed3ee();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_89bc5dff7a6fb0b55d6948ec0dbed3ee();
    });
  }
});
