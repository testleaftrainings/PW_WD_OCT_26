class Browser4{
    browserName : string = 'msedge'

    openBrowser(){
        console.log('Browser opened');
        
    }
}

class LoginPage4 extends Browser4{
    login(){
        console.log('Login successfull');
        
    }
}

class HomePage4 extends LoginPage4{
    home(){
        console.log('Home page loaded');
        
    }
}

class reportPage extends Browser4{
    reports(){
        console.log('reports opened');
        
    }
}

const home = new HomePage4()

home.home()
home.login()
home.openBrowser()
console.log(home.browserName);

const report = new reportPage()

console.log(report.browserName)
report.openBrowser()
report.reports()
