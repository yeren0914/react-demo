import { observable, action } from 'mobx';

class loginState {
    constructor() {
        this.beff = true;
    }
    @observable state = {
        telValue:'',//电话号码
    };

    @action setPhone(tel) {
        this.state.telValue = tel;
    }

}



export default new loginState();
