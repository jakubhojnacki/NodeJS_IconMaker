/**
 * @module "ImageManipulatorSettings" class
 * @description Settings describing one image manipulator
 */

"use strict";

export class ImageManipulatorSettings {
    get type() { return this.mType; }
    set type(pValue) { this.mType = String.validate(pValue); }
    get directoryPath() { return this.mDirectoryPath; }
    set directoryPath(pValue) { this.mDirectoryPath = String.validate(pValue); }

    constructor(pType, pDirectoryPath) {
        this.type = pType;
        this.directoryPath = pDirectoryPath;
    }

    validate(pValidator) {
        pValidator.setComponent(ImageManipulatorSettings.name);
        pValidator.testNotEmpty("type", this.type);
        pValidator.testNotEmpty("directoryPath", this.directoryPath);
        pValidator.restoreComponent();
    }

    toData() {
        let data = super.toData();
        data.type = this.type;
        data.directoryPath = this.directoryPath;
        return data;
    }

    fromData(pData) {
        if (pData != null) {
            this.type = pData.type;
            this.directoryPath = pData.directoryPath;
        }
        return this;
    }       
}