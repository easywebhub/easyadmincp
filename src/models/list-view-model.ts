export class ListViewModel {
  router;
  route;
  service;
  entities = [];
  pageSize: number = 1;
  total: number = 1;
  current: number = 1;
  allPage: number = 1;
  constructor(route, router, service) {
    this.route = route;
    this.router = router;
    this.service = service;
  }
 async activate() {
    await this.load();
  }

 async load() {
    this.entities = [];

   await this.service.getPage()
      .then(result => {
        this.entities = result.entities;
        this.total = result.total;
        this.current = result.current;
        this.allPage = result.allPage;
        this.pageSize = result.pageSize;
        
      });
  }
 open(id) {
    this.router.navigate(this.route + '/' + id);
  }
}
