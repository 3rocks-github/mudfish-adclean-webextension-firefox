
function mudfish_adclean_b10a2e44fd98eca272b53b35fb04d337() {
  try {
    Sizzle(`div[class$="-ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b10a2e44fd98eca272b53b35fb04d337 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b10a2e44fd98eca272b53b35fb04d337, function (items) {
  if (mudfish_adclean_g_conf_b10a2e44fd98eca272b53b35fb04d337.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b10a2e44fd98eca272b53b35fb04d337();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b10a2e44fd98eca272b53b35fb04d337();
    });
  }
});
