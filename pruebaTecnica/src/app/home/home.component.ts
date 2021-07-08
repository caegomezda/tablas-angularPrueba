import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data:any;
  dataId:any = []
  dataContent:any = []
  columnDefs = [
    {headerName: 'Datos', field:"dato"},
    
  ];
  columnDefs2 = [
    {headerName: 'Metodos', field:"id"}
  ];
  rowData:any = [];
  rowData2:any = []
  constructor(private apiSerive : ApiService) { }

  ngOnInit(): void {
    this.getData();

  }
  async getData(){
    this.data = await this.apiSerive.getData();
    await this.idFilter()
    this.rowData = this.dataId;
    console.log("this.dataId",this.dataId);
    console.log("this.data",this.data);
  }

  idFilter(){
      for (let index = 0; index < this.data.length; index++) {
        this.dataId.push({dato : this.data[index]['id']});
      }
  }

  onClick(item:any){
    console.log("click",item.srcElement.innerHTML);
    let dataid = item.srcElement.innerHTML;
    let dataContainer = []
    for (let index = 0; index < this.data.length; index++) {
      if (this.data[index]['id'] === dataid) {
        for (let j = 0; j < this.data[index][`datos_${index}`].length; j++) {
          
          dataContainer.push({id : this.data[index][`datos_${index}`][j]['id']});
        }
        this.dataContent = dataContainer;
        this.rowData2 = dataContainer
      }
    }
    console.log("this.dataContent",this.dataContent)
  }


}
