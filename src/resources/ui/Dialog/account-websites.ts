
import {inject} from 'aurelia-dependency-injection';
import {
  UserServices
} from '../../../services/Account/UserServices';

@inject(UserServices)
export class AccountWebsites{
  
  entity:any;
  clssServices:UserServices;

  constructor(UserServices) {
    
      this.clssServices  = UserServices;
   
   }

  activate(params){
    console.log('params',params)
     this.entity=params.Websites

    //  await this.clssServices.AllWebsiteOfUser(params.AccountId).then(rs=>{
    //        console.log('params',(rs as any).data) 
    //        this.entity=(rs as any).data;
    //   })
  }

  addWebsite() {
    // this.detail = this.order.entityAspect.entityManager
    //   .createEntity('OrderDetail', { OrderID: this.order.OrderID, Quantity: 1 });
    // this.openDetail();
  }

  editWebsite(item) {
    // this.detail = detail;
    // this.openDetail();
  }

  removeWebsite(item) {
    
     this.entity.splice(this.entity.indexOf(item), 1)
     //console.log('entity',this.entity.length)
  }

  detailPropertyChanged(args) {
    // autofill UnitPrice based on selected Product
    // if (args.propertyName !== 'ProductID') {
    //   return;
    // }
    // var product = this.productsIndex[args.newValue];
    // this.detail.UnitPrice = product ? product.UnitPrice : null;
  }

  openWebsite() {
    // // subscribe to Product change to autofill UnitPrice
    // this._subscription = this.detail.entityAspect.propertyChanged.subscribe(args => this.detailPropertyChanged(args));

    // // prevent selecting the same product twice.
    // this.products = this.allProducts
    //   .filter(p => this.order.OrderDetails.filter(d => d.ProductID === p.ProductID && d !== this.detail).length === 0);

    // // open the modal.
    // $('#detail').openModal();
  }

  closeDetail() {
    // this.detail.entityAspect.propertyChanged.unsubscribe(this._subscription);
    // $('#detail').closeModal();
  }

 
}

/**
* Value converter for the "discount" field to allow users to enter discounts as whole numbers
* even though they are stored as decimals.
*/
export class DiscountValueConverter {
  toView(value) {
    return value === null ? null : Math.floor(value * 100);
  }

  fromView(value) {
    value = +value;

    if (isNaN(value) || value >= 100) {
      return 0;
    }

    return (value / 100).toFixed(2);
  }
}
