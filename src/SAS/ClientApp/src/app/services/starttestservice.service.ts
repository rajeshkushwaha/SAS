import { Injectable } from '@angular/core';
import { SahredData } from '../models/shareddata.model';

@Injectable({
  providedIn: 'root'
})
export class StarttestserviceService {

  //sharedData:SahredData ;
  skill:string=null;
  expertiesLevel:string=null;
  sharingData: SahredData= new SahredData();
  constructor() { }
  saveData(expertieslevel:string,technology:string){
    console.log('save data function called' + expertieslevel + " " + technology);
    this.sharingData.expertieslevel=expertieslevel; 
    this.sharingData.technology = technology;
  }

  getData()
  {
    console.log('get data function called');
    this.sharingData.expertieslevel;
    this.sharingData.technology;
    return this.sharingData;
    //return this.sharingData.name;
  }
}
