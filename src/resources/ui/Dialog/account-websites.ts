import {SubListViewModel} from '../../../models//sub-list-view-model';
import {inject, singleton} from 'aurelia-dependency-injection';
import {AppRouter} from 'aurelia-router';
import {WebsiteService} from '../../../ViewModels/AccountVM//website-service';

@inject(AppRouter,WebsiteService)
export class AccountWebsites extends SubListViewModel {
  constructor(router, service) {
    super('accounts', router, service)
  }
}