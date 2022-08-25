import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { Language, Level, ProgramModel, ProgramType } from '../models/program.model';
import { FileValidator } from '../utils/file-validator';
import { FormValidator } from '../utils/form-validator';

@Component({
  selector: 'app-create-program',
  templateUrl: './create-program.component.html',
  styleUrls: ['./create-program.component.css']
})
export class CreateProgramComponent implements OnInit {
  program: ProgramModel = new ProgramModel();
  submitted: boolean = false;
  // mounths = MOUNTHS;
  languagages?: Language[] = [Language.English, Language.French, Language.Spanish];
  levels?: Level[] = [Level.Beginner, Level.Intermediate, Level.Advanced]
  levelSelected?: any;
  programTypes?: ProgramType[] = [ProgramType.Foundation, ProgramType.Specialization]
  programTypeSelected?: any;
  languageSelected?: Language;
  defaultDuration?: any;
  defaultHours?: any;
  defaultDate?: any;
  pictureCover?: any;
  pictureLoaded: boolean = false;
  videoCover?: any;
  videoLoaded: boolean = false;


  constructor(private toast: HotToastService,) { }

  ngOnInit(): void {
    this.levelSelected =  this.levels?.find(l => l == Level.Beginner);
    this.programTypeSelected =  this.programTypes?.find(p => p == ProgramType.Foundation);
    this.defaultDuration = 1;
    this.defaultHours = 8;
    this.defaultDate = new Date();
  }

  getLanguageSelected(event: any) {
    console.log(event.value);
    this.languageSelected = event.value;
}

getError(field: NgModel) {
    return FormValidator.getError(field);
}

isValid(field: NgModel) {
    return FormValidator.isValid(field);
}

getDate(value: any) {
    console.log(value);
    this.program.startDate = value;
}

save(form: NgForm) {
  if (form.invalid) {
    return;
  }
  this.showSuccess("Votre programme a été enregistré avec succès");
}

  detectFile(inputPicture: any) {
    let file = inputPicture.files[0];
    console.log(file);
    if (file && file.type.match('image/*')) {
        if (file.size > 100000) {
          this.showError('Désolé! Fichier trop grande');
          return;
        }
    } else if (file && file.type.match('video/*')) {
      if (file.size > 500000000) {
        this.showError('Désolé! Fichier trop grande');
        return;
      }
    } else if (file && !file.type.match('image/*') && !file.type.match('video/*')) {
      this.showError('Désolé! Fichier non prise en charge');
      return;
    }
    console.log("reds");
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
            if (file.type.match('image/*')) {
              this.pictureLoaded = true;
              this.pictureCover = reader.result?.toString();
            } else if (file.type.match('video/*')) {
              this.videoLoaded = true;
              this.videoCover = reader.result?.toString();
            }
          }
    }

  removeFile(fileType: string) {
    switch(fileType) {
      case 'image' :
      this.pictureLoaded = false;
      this.pictureCover = "";
      break;
      case 'video' :
        this.videoLoaded = false;
        this.videoCover = "";
        break;
    }
  }  


  showSuccess(message: string) {
    this.toast.success(message, {
      duration: 3000,
      style: {
        border: '1px solid #63BFAD',
        padding: '16px',
        color: '#63BFAD',
      },
      iconTheme: {
        primary: '#63BFAD',
        secondary: '#FFFAEE',
      },
    });
  }

  showError(message: string) {
    this.toast.error(message, {
      duration: 3000,
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
      iconTheme: {
        primary: '#713200',
        secondary: '#FFFAEE',
      },
    });
  }
}

