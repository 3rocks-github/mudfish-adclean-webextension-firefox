var mudfish_adclean_twitch_g_conf = {
  mudfish_adclean_filter_on: true
};

var mudfish_adclean_twitch_settings = {
  BannerVisible: true,
  ForcedQuality: null,
  ProxyType: null,
  ProxyQuality: null,
  AdTime: 0
};

function mudfish_adclean_twitch_updateSettings() {
  postMessage({
    type: 'SetTwitchAdblockSettings',
    settings: mudfish_adclean_twitch_settings,
  }, '*');
}

window.addEventListener('message', (event) => {
    if (event.data.type && event.data.type == 'SetTwitchAdTime') {
        chrome.storage.local.set({adTimeTTV: event.data.adtime});
        console.log("Set ad time to " + event.data.adtime);
    }
});

function mudfish_adclean_twitch() {
  const script = document.createElement('script');
  script.src =
    chrome.runtime.getURL('/res/web_accessible_resources/war_twitch.js');
  script.onload = mudfish_adclean_twitch_updateSettings;
  console.log(script);
  (document.body || document.head || document.documentElement).appendChild(script);
}

chrome.storage.local.get(mudfish_adclean_twitch_g_conf, function (items) {
  if (mudfish_adclean_twitch_g_conf.mudfish_adclean_filter_on) {
    mudfish_adclean_twitch();
  }
});
