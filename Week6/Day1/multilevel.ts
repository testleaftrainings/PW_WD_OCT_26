class Browser1{

    openBrowser(){
        console.log('Browser opened');
        
    }
}

class LoginPage1 extends Browser1{

    login(){
        console.log('login success');
        
    }
}

class HomePage extends LoginPage1{

    searchProduct(){
        console.log('Product searched');
        
    }
}

const obj1 = new HomePage()

obj1.login()
obj1.openBrowser()
obj1.searchProduct()