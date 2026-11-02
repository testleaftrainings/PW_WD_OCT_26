class browser{

    browserName : string = 'chrome'

    launchBrowser(){
        console.log('Browser launched');
        
    }
}

class LoginPage extends browser{

    login(){
        console.log('Login successfull');
        
    }
}

const single = new LoginPage()

single.launchBrowser()
single.login()