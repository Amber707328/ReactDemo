import {observable,action} from "mobx";

class UserStore {
    @observable num = 0
    @action changeNum(){
        this.num++
    }
}
export default UserStore