export class CreateWeb {

    Name : string;
    DisplayName : string;
    Url : string;
    Accounts:any;
     constructor(entity: any) {
      
        this.Name = entity.Name;
        this.DisplayName = entity.DisplayName;
        this.Url = entity.Url;
        this.Accounts = entity.Accounts;
       
    }
}
