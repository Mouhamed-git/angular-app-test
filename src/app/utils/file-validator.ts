export class FileValidator {
    static getPicture(entitie: any) {
        return this.sanitize(entitie);
     }
   
     static sanitize(file: any) {
       if (file.toString().startsWith("dataimage/jpegbase64")) {
         file = file.replace("dataimage/jpegbase64", "");
       }
       return `data:image/jpg;base64,${file}`;
     }
   
     static detectPicture(input: any, picture: any) {
       const file = input.files[0];
       if (file && file.type.match("image/*")) {
         const reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onload = () => {
            picture = reader.result?.toString();
            return picture;
         }
       }
     }
}