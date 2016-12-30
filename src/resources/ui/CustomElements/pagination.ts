import {
  customElement,
  bindable,
  computedFrom,
  bindingMode,
  BindingEngine,
  inject
} from 'aurelia-framework';
@inject(BindingEngine)
@customElement('ui-pagination')

export class UIPagination {
 @bindable({
  defaultBindingMode: bindingMode.twoWay
 })
@bindable({
  defaultBindingMode: bindingMode.twoWay
 }) totalRecord=1
@bindable({
  defaultBindingMode: bindingMode.twoWay
 }) pageSize=10
@bindable({
  defaultBindingMode: bindingMode.twoWay
 }) pageAll
@bindable({
  defaultBindingMode: bindingMode.twoWay
 }) currentPage=1
  numberArr=[]
  
  constructor(bindingEngine) {
  this.pageAll = Math.ceil(this.totalRecord / this.pageSize)
   
   this.currentPage = 1
    this.numberArr = this.indexs()
    let subscriptioncurrent = bindingEngine.propertyObserver(this,'currentPage')
      .subscribe(() => {
        console.log('current',this.currentPage)
        this.numberArr = this.indexs()
      });
  }

  firstPageNumber() {
    return this.currentPage = 1
  }
  lastPageNumber() {
    return this.currentPage = this.pageAll
  }
  NextPage() {
    return this.currentPage < this.pageAll ? this.currentPage++ : this.pageAll
  }
  PreviousPage() {
    if (this.currentPage == 1)
      return this.currentPage
    return this.currentPage--
  }
  btnClick(index) {
    return this.currentPage = index
  }
  indexs() {
    let left = 1;
    let right = this.pageAll
    let ar: any = []
    if (this.pageAll >= 11) {
      if (this.currentPage > 5 && this.currentPage < this.pageAll - 4) {
        left = this.currentPage - 5
        right = this.currentPage + 4
      } else {
        if (this.currentPage <= 5) {
          left = 1
          right = 10
        } else {
          right = this.pageAll
          left = this.pageAll - 9
        }
      }
    }
    while (left <= right) {
      ar.push(left)
      left++
    }
    return ar
  }
}
