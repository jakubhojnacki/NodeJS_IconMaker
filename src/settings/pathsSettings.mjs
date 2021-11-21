/**
 * @module "ProfilesSettings" class
 * @description Settings of profiles
 */

"use strict";

export class PathsSettings {
    get iconLibraries() { return this.mIconLibraries; }
    set iconLibraries(pValue) { this.mIconLibraries = String.verify(pValue); }
    get profiles() { return this.mProfiles; }
    set profiles(pValue) { this.mProfiles = String.verify(pValue); }
    get temporary() { return this.mTemporary; }
    set temporary(pValue) { this.mTemporary = String.verify(pValue); }

    constructor(pIconLibraries, pProfiles, pTemporary) {
        this.iconLibraries = pIconLibraries;
        this.profiles = pProfiles;
        this.temporary = pTemporary;
    }

    validate(pValidator) {
        pValidator.setComponent(PathsSettings.name);
        pValidator.testNotEmpty("iconLibraries", this.iconLibraries);
        pValidator.testNotEmpty("profiles", this.profiles);
        pValidator.testNotEmpty("temporary", this.temporary);
        pValidator.restoreComponent();
    }

    toData() {
        let data = {};
        data.iconLibraries = this.iconLibraries;
        data.profiles = this.profiles;
        data.temporary = this.temporary;
        return data;
    }

    fromData(pData) {
        if (pData != null) {
            this.iconLibraries = pData.iconLibraries;
            this.profiles = pData.profiles;
            this.temporary = pData.temporary;
        }
        return this;
    }       
}