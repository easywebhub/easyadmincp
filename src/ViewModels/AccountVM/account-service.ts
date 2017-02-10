import {
  UserServices
} from '../../services/Account/UserServices';
import {
  inject
} from 'aurelia-dependency-injection';
import {
  User
} from '../../models//user';
import {
  ValidationControllerFactory,ValidationRules

} from 'aurelia-validation';
import {
  SemanticFormRenderer
} from '../../resources/validation/semantic-form-renderer';
@inject(UserServices,ValidationControllerFactory)
export class AccountService {

  clssServives: UserServices;
  controller:any;
  constructor(userServices,controllerFactory) {
    this.clssServives = userServices;
    this.controller = controllerFactory.createForCurrentScope();
    this.controller.addRenderer(new SemanticFormRenderer());
  }
  getPage() {
    return this.clssServives.GetListByUsers().then(rs => {
      //  console.log('data',(rs as any).data)
      return {
        entities: (rs as any).data,
        pageSize: 20,
        total: (rs as any).data.length,
        current: 1,
        allPage: Math.ceil((rs as any).data.length / 20)
      }
    })

  }

  loadExisting(id) {
    return this.clssServives.DetaiByUser(id)
      .then(rs => {
        console.log('@@@@@####',rs)
        return {
          entity: new User((rs as any).data)

        };
      });
  }

 createPromise(){
   return new Promise((resolve, reject)=> {
         resolve(new User({}))
   })
 } 
  createNew() {
     return this.createPromise().then(rs=>{
       console.log('new',rs)
         return {
            entity:rs
         }
     })
  
  }
  
}
