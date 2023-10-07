
function mudfish_adclean_89bc5dff7a6fb0b55d6948ec0dbed3ee() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[data-fonts-target="fontsContainer"] > div.group.min-h-auto:not(.duration-300):not(.justify-between)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_89bc5dff7a6fb0b55d6948ec0dbed3ee();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_89bc5dff7a6fb0b55d6948ec0dbed3ee();
  });
}
