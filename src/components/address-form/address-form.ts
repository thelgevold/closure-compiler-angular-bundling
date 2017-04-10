function zipValidator(zip) {

    var valid = /^\d{5}$/.test(zip.value);

    if(valid){
        return null;
    }

    return {"invalidZip":true};
}

import {Component} from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
    selector: 'address-form',
    templateUrl: './address-form.html'
})

export class AddressForm {

    form;
    payLoad = null;

    constructor() {
        let group = {
          'firstName': new FormControl('', Validators.required),
          'streetAddress': new FormControl('', Validators.required),
          'zip': new FormControl('', zipValidator),
          'type': new FormControl('home')
        }
        this.form = new FormGroup(group);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
}
