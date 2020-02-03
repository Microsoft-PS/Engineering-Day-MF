const Path = require('path');
const Fs = require("fs");
class ManifestValidator {

    constructor() {
        this.manifestContent = this.LoadManifestContent();
    }

    IsAvailableInManifest(moduleIdentitiy) {
        if (this.manifestContent && this.manifestContent.length > 0 && moduleIdentitiy && moduleIdentitiy.length > 0) {
            return (this.manifestContent.indexOf(this.GetModuleIdentity(moduleIdentitiy)) >= 0);
        }
    }

    GetModuleIdentity(moduleIdentitiy) {
        var parts = moduleIdentitiy.split("\\");
        var startIndex = parts.indexOf("node_modules");
        var response = ".";
        for (let i = startIndex; i < parts.length; i++) {
            response = response + "/" + parts[i];
        }
        return response;
    }

    LoadManifestContent() {
        var manifestFilePath = Path.join(process.cwd(), "manifest");
        console.log(manifestFilePath);
        if (!Fs.existsSync(manifestFilePath)) {
            //throw "Manifest file is missing"; 
            return [];
        }
        var manifestContent = [];

        Fs.readdirSync(manifestFilePath).forEach(file => {
            if (file.indexOf(".json") < 0) return // This is not a json file. Igore.
            var fileContent = this.readJsonFile(Path.join(manifestFilePath, file));
            manifestContent = manifestContent.concat(fileContent.content);
        });
        return manifestContent;
    }

    readJsonFile(filePath) {
        let config = Fs.readFileSync(filePath, 'utf-8');
        config = config.replace(/^\uFEFF/, '');
        let configJson = JSON.parse(config.toString());
        return configJson;
    }
}

module.exports = ManifestValidator;