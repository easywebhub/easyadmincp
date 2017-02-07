import {
  UserServices
} from '../../services/Account/UserServices';
import {
  inject
} from 'aurelia-dependency-injection';
import {
  User
} from '../../models//user';
@inject(UserServices)
export class WebsiteService {

  clssServives: UserServices;
  constructor(userServices) {
    this.clssServives = userServices
  }
  getPage(id) {
    return this.clssServives.AllWebsiteOfUser(id).then(rs => {
      console.log('data',(rs as any).data)
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

        return {
          entity: (rs as any).data

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
         return {
            entity:rs
         }
     })
   
      


  }
}
