export class EntityViewModel {
  service;
  entityManager;
  entity;
  info:any;
  constructor(service) {
    this.service = service;
  }

  activate(info) {
    this.info=info;
    var promise;
    if (info.id === 'new') {
      promise = this.service.createNew();
    } else {
      promise = this.service.loadExisting(info.id);
    }

    return promise.then(result => {
         this.entity = result.entity;
    });
  }

  save() {
      console.log('Model Account',JSON.stringify(this.entity));
  }

  revert() {
     this.activate(this.info)
  }
}