
function mudfish_adclean_ec2064256606456145925a46eea8ecdd() {
  try {
    Sizzle(`img[src*=".imgbox.com/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ec2064256606456145925a46eea8ecdd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ec2064256606456145925a46eea8ecdd, function (items) {
  if (mudfish_adclean_g_conf_ec2064256606456145925a46eea8ecdd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ec2064256606456145925a46eea8ecdd();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ec2064256606456145925a46eea8ecdd();
    });
  }
});
