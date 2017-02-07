export class SubListViewModel {
  router;
  route;
  service;
  entities = [];
  pageSize: number = 1;
  total: number = 1;
  current: number = 1;
  allPage: number = 1;
  params:any;
  constructor(route, router, service) {
    this.route = route;
    this.router = router;
    this.service = service;
  }
 async activate(params) {
   console.log('sub params',params);
    this.params=params;
    await this.load();
  }

  load() {
    this.entities = [];

    this.service.getPage(this.params.AccountId)
      .then(result => {
        this.entities = result.entities;
        // this.total = result.total;
        // this.current = result.current;
        // this.allPage = result.allPage;
        // this.pageSize = result.pageSize;
        //console.log('result',result.current,result.pageSize, result.allPage,result.total)
        // this.isLoading = false;
      });
  }

  //   setPage(index) {
  //     this.pageIndex = index;
  //     this.load();
  //   }

  open(item) {
    this.router.navigate(this.route + '/' + this.params+'/WebsOfAccount'+ '/' + item.WebsiteId);
  }
}
