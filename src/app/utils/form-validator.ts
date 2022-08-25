import { NgModel } from '@angular/forms';

export class FormValidator {
    static getError(model: NgModel) {
        if (model && model.errors) {
            if (model.errors['required']) {
                return 'Champ obligatoire';
            }
            if (model.errors['minlength']) {
                return `${model.name} doit avoir au moins ${model.errors['minlength'].requiredLength} characters`;
            }
            if (model.errors['maxlength']) {
                return `${model.name} ne doit pas avoir plus ${model.errors['maxlength'].requiredLength} characters`;
            }
            if (model.errors['min']) {
                return `${model.name} ne peut etre supérieure à `;
            }
        }
        return '';
    }

    static isValid(field: NgModel) {
        return field.untouched && field.valid;
    }
}