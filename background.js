function openMyPage() {
    console.log("injecting");
    browser.tabs.create({
        "url": "https://www.google.com"
    });
}

browser.browserAction.onClicked.addListener(openMyPage);
