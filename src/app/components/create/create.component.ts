import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProjectService,UploadService]
})
export class CreateComponent implements OnInit {
	public title:string;
	public project: Project;
  public status:string;
  public fileToUpload:Array<File>;
  public service;
  public FileTemp;
  constructor(
  		private _projectService: ProjectService,
      private _uploadService: UploadService
  	) { 
    this.service=Global.url;
  	this.title = "Crear Proyecto";
  	this.project = new Project('','','','',2019,'','');
  }

  ngOnInit() {
  }

  onSubmit(form){
    //guardar los datos básicos
  	this._projectService.saveProject(this.project).subscribe(
      response=>{
        if(response.project){
          var responseImage;
          // guardar imagen
          responseImage=this._uploadService.makeFileRequest(this.service+'project/update/upload-image/'+response.project._id,[],this.fileToUpload,'image').then((result:any)=>{
             this.status="success";
          })
          form.reset();
        }else{
          this.status="failed";
        }
      },
      error=>{
        console.log(<any>error);
      })
  }

  fileChangeEvent(fileInput: any){
    this.fileToUpload = <Array<File>>fileInput.target.files;
  }

}
