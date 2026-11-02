class Browser5{

    launchBrowser(){
        console.log('launch chrome browser');
        }
}

class EdgeBrowser extends Browser5{
    launchBrowser(){
        super.launchBrowser()
console.log('Launch edge browser');

    }
}

class Firefox extends EdgeBrowser{
    launchBrowser(): void {
    console.log('Launch Firefox browser');
    
    }
}


const obj = new EdgeBrowser()
obj.launchBrowser()
//obj.launchBrowser1()

const obj5 = new Firefox()
obj5.launchBrowser()