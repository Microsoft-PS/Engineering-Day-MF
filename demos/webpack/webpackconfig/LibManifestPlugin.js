/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

const path = require("path");
const asyncLib = require("async");

class LibManifestPlugin {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        compiler.plugin("emit", (compilation, callback) => {
            const manifest = {
                content: []
            };
            const targetPath = this.options.path;

            asyncLib.forEach(compilation.chunks, (chunk, callback) => {

                if (!chunk.isInitial()) {
                    callback();
                    return;
                }

                const name = this.options.name && compilation.getPath(this.options.name, {
                    hash: compilation.hash,
                    chunk
                });

                var content = chunk.mapModules(module => {
                        if (module.libIdent) {
                            const ident = module.libIdent({
                                context: process.cwd()
                            });

                            if (ident && ident.toString().indexOf("./node_modules/") >= 0) {
                                return ident;
                            }

                        }
                    })
                    .filter(item => {
                        if (item !== null && item !== undefined && item !== "") {
                            return item;
                        }
                    });

                manifest.content = [...manifest.content, ...content];

            }, callback);
            const content = new Buffer(JSON.stringify(manifest), "utf8"); //eslint-disable-line
            compiler.outputFileSystem.mkdirp(path.dirname(targetPath), err => {
                if (err) return callback(err);
                compiler.outputFileSystem.writeFile(targetPath, content, callback);
            });
        });
    }
}
module.exports = LibManifestPlugin;