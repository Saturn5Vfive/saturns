self.oninstall = function(){
    console.log("mario browser installed the script");
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function real(){
    while(true){
        await fetch("https://conhost.pythonanywhere.com/")
        await sleep(5000);
    }
}

self.onactivate = function(){
    console.log("activated");
    real();
}