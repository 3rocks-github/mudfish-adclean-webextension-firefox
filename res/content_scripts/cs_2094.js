
function mudfish_adclean_d4857620efc52e9021e921fe3df5ec2a() {
  try {
    Sizzle(`div[style^="min-height:"][class^="bg-hasha-"] > div[style] + .max-w-full`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d4857620efc52e9021e921fe3df5ec2a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d4857620efc52e9021e921fe3df5ec2a, function (items) {
  if (mudfish_adclean_g_conf_d4857620efc52e9021e921fe3df5ec2a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d4857620efc52e9021e921fe3df5ec2a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_d4857620efc52e9021e921fe3df5ec2a();
    });
  }
});
