export class EntityViewModel {
  service;
  entityManager;
  entity;
  info: any;
  controller:any;
  constructor(service) {
    this.service = service;
    console.log('service',service)
  }

  activate(info) {
    this.info = info;
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
 
    this.service.controller.validate().then(rs => {
     
      if (rs.valid == true) {
         console.log('Model Account', this.entity);
      } else
        console.log('error')
    })
  }

  revert() {
     this.activate(this.info);

    
  }
}
