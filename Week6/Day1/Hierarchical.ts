class Browser2{

    browserName : string ='chrome'
    protected launchBrowser(){
        console.log('Browser started');
        
    }

    public get readData(){
        return this.launchBrowser()
    }
    
}

class LoginPage2 extends Browser2{

    enterUsername : string = 'democsr'

    login(){
        console.log('Login Done');
        
    }
}

class DashboardPage extends Browser2{

    dashboard(){
        console.log('Dashboard opened');
        
    }
}

const obj3 = new DashboardPage()
obj3.dashboard()
console.log(obj3.readData)


const obj2 = new LoginPage2()
//obj2.launchBrowser()
obj2.login()
console.log(obj2.browserName)