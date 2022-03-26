import ejs from 'ejs';
import path from 'path';
/**
 * @param {string} file 
 */
function layout(file) {
    // set layout file
    this._layoutFile = file;
}

class ViewEngine {
    static express() {
        return function(file, data, callback) {
            data = data || {};
            // add extensions (bind to this view)
            data.layout = layout.bind(this);
            return ejs.renderFile(file, data, (err, result) => {
                if (err) {
                    return callback(err);
                }
                if (this._layoutFile != null) {
                    // get layout extension
                    const layoutExt = this.ext || '.ejs';
                    // get layout absolute path
                    const layoutFile = path.resolve(this.root, this._layoutFile + layoutExt);
                    // assing body
                    Object.defineProperty(data, 'body', {
                        configurable: true,
                        enumerable: false,
                        writable: false,
                        value: result
                    });
                    // render layout
                    ejs.renderFile(layoutFile, data, (err, finalResult) => {
                        if (err) {
                            return callback(err);
                        }
                        return callback(null, finalResult);
                    });
                }
                return callback(null, result);
            });
        }
    }
}

export {
    ViewEngine
}