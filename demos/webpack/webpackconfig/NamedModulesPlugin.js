/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

const applicationId = "BankingApplication";

class NamedModulesPlugin {
    constructor(options) {
        this.options = options || {};
    }

    apply(compiler) {
        compiler.plugin("compilation", (compilation) => {
            compilation.plugin("before-module-ids", (modules) => {
                modules.forEach((module) => {
                    if (module.id === null && module.libIdent) {
                        let moduleIdentity = module.libIdent({
                            context: this.options.context || compiler.options.context
                        });

                        if (!(moduleIdentity.indexOf("node_modules") >= 0)) {
                            moduleIdentity = applicationId + "/" + moduleIdentity;
                        }
                        module.id = moduleIdentity;
                    }
                });
            });
        });
    }
}

module.exports = NamedModulesPlugin;