(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~global_components"],{

/***/ "./node_modules/@iconify/icons-feather/chevron-right.js":
/*!**************************************************************!*\
  !*** ./node_modules/@iconify/icons-feather/chevron-right.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 18l6-6l-6-6\"/></g>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/vue/dist/IconifyIcon.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@iconify/vue/dist/IconifyIcon.esm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var merge_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
/**
 * Merge two objects
 *
 * Replacement for Object.assign() that is not supported by IE, so it cannot be used in production yet.
 */
function merge(item1, item2, item3) {
    var result = Object.create(null);
    var items = [item1, item2, item3];
    for (var i = 0; i < 3; i++) {
        var item = items[i];
        if (typeof item === 'object' && item) {
            for (var key in item) {
                result[key] = item[key];
            }
        }
    }
    return result;
}
exports.merge = merge;

});

unwrapExports(merge_1);
var merge_2 = merge_1.merge;

var customisations = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.fullCustomisations = exports.defaults = void 0;

/**
 * Default icon customisations values
 */
exports.defaults = Object.freeze({
    // Display mode
    inline: false,
    // Dimensions
    width: null,
    height: null,
    // Alignment
    hAlign: 'center',
    vAlign: 'middle',
    slice: false,
    // Transformations
    hFlip: false,
    vFlip: false,
    rotate: 0,
});
/**
 * Convert IconifyIconCustomisations to FullIconCustomisations
 */
function fullCustomisations(item) {
    return merge_1.merge(exports.defaults, item);
}
exports.fullCustomisations = fullCustomisations;

});

unwrapExports(customisations);
var customisations_1 = customisations.fullCustomisations;
var customisations_2 = customisations.defaults;

var shorthand = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.alignmentFromString = exports.flipFromString = void 0;
var separator = /[\s,]+/;
/**
 * Apply "flip" string to icon customisations
 */
function flipFromString(custom, flip) {
    flip.split(separator).forEach(function (str) {
        var value = str.trim();
        switch (value) {
            case 'horizontal':
                custom.hFlip = true;
                break;
            case 'vertical':
                custom.vFlip = true;
                break;
        }
    });
}
exports.flipFromString = flipFromString;
/**
 * Apply "align" string to icon customisations
 */
function alignmentFromString(custom, align) {
    align.split(separator).forEach(function (str) {
        var value = str.trim();
        switch (value) {
            case 'left':
            case 'center':
            case 'right':
                custom.hAlign = value;
                break;
            case 'top':
            case 'middle':
            case 'bottom':
                custom.vAlign = value;
                break;
            case 'slice':
            case 'crop':
                custom.slice = true;
                break;
            case 'meet':
                custom.slice = false;
        }
    });
}
exports.alignmentFromString = alignmentFromString;

});

unwrapExports(shorthand);
var shorthand_1 = shorthand.alignmentFromString;
var shorthand_2 = shorthand.flipFromString;

var rotate = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotateFromString = void 0;
/**
 * Get rotation value
 */
function rotateFromString(value) {
    var units = value.replace(/^-?[0-9.]*/, '');
    function cleanup(value) {
        while (value < 0) {
            value += 4;
        }
        return value % 4;
    }
    if (units === '') {
        var num = parseInt(value);
        return isNaN(num) ? 0 : cleanup(num);
    }
    else if (units !== value) {
        var split = 0;
        switch (units) {
            case '%':
                // 25% -> 1, 50% -> 2, ...
                split = 25;
                break;
            case 'deg':
                // 90deg -> 1, 180deg -> 2, ...
                split = 90;
        }
        if (split) {
            var num$1 = parseFloat(value.slice(0, value.length - units.length));
            if (isNaN(num$1)) {
                return 0;
            }
            num$1 = num$1 / split;
            return num$1 % 1 === 0 ? cleanup(num$1) : 0;
        }
    }
    return 0;
}
exports.rotateFromString = rotateFromString;

});

unwrapExports(rotate);
var rotate_1 = rotate.rotateFromString;

var icon = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.fullIcon = exports.iconDefaults = void 0;

/**
 * Default values for IconifyIcon properties
 */
exports.iconDefaults = Object.freeze({
    body: '',
    left: 0,
    top: 0,
    width: 16,
    height: 16,
    rotate: 0,
    vFlip: false,
    hFlip: false,
});
/**
 * Create new icon with all properties
 */
function fullIcon(icon) {
    return merge_1.merge(exports.iconDefaults, icon);
}
exports.fullIcon = fullIcon;

});

unwrapExports(icon);
var icon_1 = icon.fullIcon;
var icon_2 = icon.iconDefaults;

var calcSize_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcSize = void 0;
/**
 * Regular expressions for calculating dimensions
 */
var unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
var unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
/**
 * Calculate second dimension when only 1 dimension is set
 *
 * @param {string|number} size One dimension (such as width)
 * @param {number} ratio Width/height ratio.
 *      If size is width, ratio = height/width
 *      If size is height, ratio = width/height
 * @param {number} [precision] Floating number precision in result to minimize output. Default = 2
 * @return {string|number} Another dimension
 */
function calcSize(size, ratio, precision) {
    if (ratio === 1) {
        return size;
    }
    precision = precision === void 0 ? 100 : precision;
    if (typeof size === 'number') {
        return Math.ceil(size * ratio * precision) / precision;
    }
    if (typeof size !== 'string') {
        return size;
    }
    // Split code into sets of strings and numbers
    var oldParts = size.split(unitsSplit);
    if (oldParts === null || !oldParts.length) {
        return size;
    }
    var newParts = [];
    var code = oldParts.shift();
    var isNumber = unitsTest.test(code);
    // eslint-disable-next-line no-constant-condition
    while (true) {
        if (isNumber) {
            var num = parseFloat(code);
            if (isNaN(num)) {
                newParts.push(code);
            }
            else {
                newParts.push(Math.ceil(num * ratio * precision) / precision);
            }
        }
        else {
            newParts.push(code);
        }
        // next
        code = oldParts.shift();
        if (code === void 0) {
            return newParts.join('');
        }
        isNumber = !isNumber;
    }
}
exports.calcSize = calcSize;

});

unwrapExports(calcSize_1);
var calcSize_2 = calcSize_1.calcSize;

var builder = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.iconToSVG = void 0;

/**
 * Get preserveAspectRatio value
 */
function preserveAspectRatio(props) {
    var result = '';
    switch (props.hAlign) {
        case 'left':
            result += 'xMin';
            break;
        case 'right':
            result += 'xMax';
            break;
        default:
            result += 'xMid';
    }
    switch (props.vAlign) {
        case 'top':
            result += 'YMin';
            break;
        case 'bottom':
            result += 'YMax';
            break;
        default:
            result += 'YMid';
    }
    result += props.slice ? ' slice' : ' meet';
    return result;
}
/**
 * Get SVG attributes and content from icon + customisations
 *
 * Does not generate style to make it compatible with frameworks that use objects for style, such as React.
 * Instead, it generates verticalAlign value that should be added to style.
 *
 * Customisations should be normalised by platform specific parser.
 * Result should be converted to <svg> by platform specific parser.
 * Use replaceIDs to generate unique IDs for body.
 */
function iconToSVG(icon, customisations) {
    // viewBox
    var box = {
        left: icon.left,
        top: icon.top,
        width: icon.width,
        height: icon.height,
    };
    // Apply transformations
    var transformations = [];
    var hFlip = customisations.hFlip !== icon.hFlip;
    var vFlip = customisations.vFlip !== icon.vFlip;
    var rotation = customisations.rotate + icon.rotate;
    if (hFlip) {
        if (vFlip) {
            rotation += 2;
        }
        else {
            // Horizontal flip
            transformations.push('translate(' +
                (box.width + box.left) +
                ' ' +
                (0 - box.top) +
                ')');
            transformations.push('scale(-1 1)');
            box.top = box.left = 0;
        }
    }
    else if (vFlip) {
        // Vertical flip
        transformations.push('translate(' + (0 - box.left) + ' ' + (box.height + box.top) + ')');
        transformations.push('scale(1 -1)');
        box.top = box.left = 0;
    }
    var tempValue;
    rotation = rotation % 4;
    switch (rotation) {
        case 1:
            // 90deg
            tempValue = box.height / 2 + box.top;
            transformations.unshift('rotate(90 ' + tempValue + ' ' + tempValue + ')');
            break;
        case 2:
            // 180deg
            transformations.unshift('rotate(180 ' +
                (box.width / 2 + box.left) +
                ' ' +
                (box.height / 2 + box.top) +
                ')');
            break;
        case 3:
            // 270deg
            tempValue = box.width / 2 + box.left;
            transformations.unshift('rotate(-90 ' + tempValue + ' ' + tempValue + ')');
            break;
    }
    if (rotation % 2 === 1) {
        // Swap width/height and x/y for 90deg or 270deg rotation
        if (box.left !== 0 || box.top !== 0) {
            tempValue = box.left;
            box.left = box.top;
            box.top = tempValue;
        }
        if (box.width !== box.height) {
            tempValue = box.width;
            box.width = box.height;
            box.height = tempValue;
        }
    }
    // Calculate dimensions
    var width, height;
    if (customisations.width === null && customisations.height === null) {
        // Set height to '1em', calculate width
        height = '1em';
        width = calcSize_1.calcSize(height, box.width / box.height);
    }
    else if (customisations.width !== null &&
        customisations.height !== null) {
        // Values are set
        width = customisations.width;
        height = customisations.height;
    }
    else if (customisations.height !== null) {
        // Height is set
        height = customisations.height;
        width = calcSize_1.calcSize(height, box.width / box.height);
    }
    else {
        // Width is set
        width = customisations.width;
        height = calcSize_1.calcSize(width, box.height / box.width);
    }
    // Check for 'auto'
    if (width === 'auto') {
        width = box.width;
    }
    if (height === 'auto') {
        height = box.height;
    }
    // Convert to string
    width = typeof width === 'string' ? width : width + '';
    height = typeof height === 'string' ? height : height + '';
    // Generate body
    var body = icon.body;
    if (transformations.length) {
        body =
            '<g transform="' + transformations.join(' ') + '">' + body + '</g>';
    }
    // Result
    var result = {
        attributes: {
            width: width,
            height: height,
            preserveAspectRatio: preserveAspectRatio(customisations),
            viewBox: box.left + ' ' + box.top + ' ' + box.width + ' ' + box.height,
        },
        body: body,
    };
    if (customisations.inline) {
        result.inline = true;
    }
    return result;
}
exports.iconToSVG = iconToSVG;

});

unwrapExports(builder);
var builder_1 = builder.iconToSVG;

var ids = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceIDs = void 0;
/**
 * Regular expression for finding ids
 */
var regex = /\sid="(\S+)"/g;
/**
 * New random-ish prefix for ids
 */
var randomPrefix = 'IconifyId-' +
    Date.now().toString(16) +
    '-' +
    ((Math.random() * 0x1000000) | 0).toString(16) +
    '-';
/**
 * Counter for ids, increasing with every replacement
 */
var counter = 0;
/**
 * Replace multiple occurance of same string
 */
function strReplace(search, replace, subject) {
    var pos = 0;
    while ((pos = subject.indexOf(search, pos)) !== -1) {
        subject =
            subject.slice(0, pos) +
                replace +
                subject.slice(pos + search.length);
        pos += replace.length;
    }
    return subject;
}
/**
 * Replace IDs in SVG output with unique IDs
 * Fast replacement without parsing XML, assuming commonly used patterns and clean XML (icon should have been cleaned up with Iconify Tools or SVGO).
 */
function replaceIDs(body, prefix) {
    if ( prefix === void 0 ) prefix = randomPrefix;

    // Find all IDs
    var ids = [];
    var match;
    while ((match = regex.exec(body))) {
        ids.push(match[1]);
    }
    if (!ids.length) {
        return body;
    }
    // Replace with unique ids
    ids.forEach(function (id) {
        var newID = typeof prefix === 'function' ? prefix() : prefix + counter++;
        body = strReplace('="' + id + '"', '="' + newID + '"', body);
        body = strReplace('="#' + id + '"', '="#' + newID + '"', body);
        body = strReplace('(#' + id + ')', '(#' + newID + ')', body);
    });
    return body;
}
exports.replaceIDs = replaceIDs;

});

unwrapExports(ids);
var ids_1 = ids.replaceIDs;

var merge = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeIcons = void 0;

/**
 * Icon keys
 */
var iconKeys = Object.keys(icon.iconDefaults);
/**
 * Merge two icons
 *
 * icon2 overrides icon1
 */
function mergeIcons(icon1, icon2) {
    var icon = Object.create(null);
    iconKeys.forEach(function (key) {
        if (icon1[key] === void 0) {
            if (icon2[key] !== void 0) {
                icon[key] = icon2[key];
            }
            return;
        }
        if (icon2[key] === void 0) {
            icon[key] = icon1[key];
            return;
        }
        switch (key) {
            case 'rotate':
                icon[key] =
                    (icon1[key] + icon2[key]) % 4;
                return;
            case 'hFlip':
            case 'vFlip':
                icon[key] = icon1[key] !== icon2[key];
                return;
            default:
                icon[key] = icon2[key];
        }
    });
    return icon;
}
exports.mergeIcons = mergeIcons;

});

unwrapExports(merge);
var merge_1$1 = merge.mergeIcons;

var iconSet = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseIconSet = void 0;



/**
 * Get list of defaults keys
 */
var defaultsKeys = Object.keys(icon.iconDefaults);
/**
 * Resolve alias
 */
function resolveAlias(alias, icons, aliases, level) {
    if ( level === void 0 ) level = 0;

    var parent = alias.parent;
    if (icons[parent] !== void 0) {
        return merge.mergeIcons(icons[parent], alias);
    }
    if (aliases[parent] !== void 0) {
        if (level > 2) {
            // icon + alias + alias + alias = too much nesting, possibly infinite
            return null;
        }
        var icon = resolveAlias(aliases[parent], icons, aliases, level + 1);
        if (icon) {
            return merge.mergeIcons(icon, alias);
        }
    }
    return null;
}
/**
 * Extract icons from an icon set
 */
function parseIconSet(data, callback, list) {
    if ( list === void 0 ) list = 'none';

    var added = [];
    // Must be an object
    if (typeof data !== 'object') {
        return list === 'none' ? false : added;
    }
    // Check for missing icons list returned by API
    if (data.not_found instanceof Array) {
        data.not_found.forEach(function (name) {
            callback(name, null);
            if (list === 'all') {
                added.push(name);
            }
        });
    }
    // Must have 'icons' object
    if (typeof data.icons !== 'object') {
        return list === 'none' ? false : added;
    }
    // Get default values
    var defaults = Object.create(null);
    defaultsKeys.forEach(function (key) {
        if (data[key] !== void 0 && typeof data[key] !== 'object') {
            defaults[key] = data[key];
        }
    });
    // Get icons
    var icons = data.icons;
    Object.keys(icons).forEach(function (name) {
        var icon$1 = icons[name];
        if (typeof icon$1.body !== 'string') {
            return;
        }
        // Freeze icon to make sure it will not be modified
        callback(name, Object.freeze(merge_1.merge(icon.iconDefaults, defaults, icon$1)));
        added.push(name);
    });
    // Get aliases
    if (typeof data.aliases === 'object') {
        var aliases = data.aliases;
        Object.keys(aliases).forEach(function (name) {
            var icon$1 = resolveAlias(aliases[name], icons, aliases, 1);
            if (icon$1) {
                // Freeze icon to make sure it will not be modified
                callback(name, Object.freeze(merge_1.merge(icon.iconDefaults, defaults, icon$1)));
                added.push(name);
            }
        });
    }
    return list === 'none' ? added.length > 0 : added;
}
exports.parseIconSet = parseIconSet;

});

unwrapExports(iconSet);
var iconSet_1 = iconSet.parseIconSet;

// Interface for functional component context that is missing in Vue types.
// Missing some unused stuff: children, slots, scopedSlots, injections
// interface FunctionalRenderContext {
// 	props: { [key: string]: unknown };
// 	data?: VNodeData;
// 	parent?: VNode;
// 	listeners?: object; // alias of data.on
// }
/**
 * Default SVG attributes
 */
var svgDefaults = {
    'xmlns': 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    'aria-hidden': true,
    'focusable': false,
    'role': 'img',
};
/**
 * Aliases for customisations.
 * In Vue 'v-' properties are reserved, so v-align and v-flip must be renamed
 */
var customisationAliases = {
    horizontalAlign: 'hAlign',
    verticalAlign: 'vAlign',
    horizontalFlip: 'hFlip',
    verticalFlip: 'vFlip',
};
/**
 * Storage for icons referred by name
 */
var storage = Object.create(null);
/**
 * IconifyIcon component
 */
var IconifyIcon = {
    name: 'IconifyIcon',
    functional: true,
    /**
     * Render icon
     *
     * @param createElement
     * @param context
     */
    render: function render(createElement, context) {
        var props = context.props;
        // Split properties
        var icon = typeof props.icon === 'string'
            ? storage[props.icon]
            : icon_1(props.icon);
        if (!icon) {
            return null;
        }
        var customisations = merge_2(customisations_2, props);
        var componentProps = merge_2(svgDefaults);
        // Copy style
        var stylesList;
        var styleString;
        var isStyleString = false;
        var hasStyle = true;
        function setStyle(value) {
            if (typeof value === 'string') {
                // Style as string
                styleString = value;
                isStyleString = true;
                return true;
            }
            if (typeof value !== 'object') {
                // Unknown type ???
                return false;
            }
            stylesList = value instanceof Array ? value.slice(0) : [value];
            return true;
        }
        var contextData = context.data;
        if (!contextData ||
            (!setStyle(contextData.staticStyle) && !setStyle(contextData.style))) {
            stylesList = [];
            hasStyle = false;
        }
        // Get element properties
        for (var key in props) {
            var value = props[key];
            switch (key) {
                // Properties to ignore
                case 'icon':
                case 'style':
                    break;
                // Flip as string: 'horizontal,vertical'
                case 'flip':
                    shorthand_2(customisations, value);
                    break;
                // Alignment as string
                case 'align':
                    shorthand_1(customisations, value);
                    break;
                // Color: copy to style
                case 'color':
                    if (isStyleString) {
                        styleString = 'color: ' + value + '; ' + styleString;
                    }
                    else {
                        stylesList.unshift({
                            color: value,
                        });
                    }
                    hasStyle = true;
                    break;
                // Rotation as string
                case 'rotate':
                    if (typeof value !== 'number') {
                        customisations[key] = rotate_1(value);
                    }
                    else {
                        componentProps[key] = value;
                    }
                    break;
                // Remove aria-hidden
                case 'ariaHidden':
                case 'aria-hidden':
                    // Vue transforms 'aria-hidden' property to 'ariaHidden'
                    if (value !== true && value !== 'true') {
                        delete componentProps['aria-hidden'];
                    }
                    break;
                default:
                    if (customisationAliases[key] !== void 0) {
                        // Aliases for customisations
                        customisations[customisationAliases[key]] = value;
                    }
                    else if (customisations_2[key] === void 0) {
                        // Copy missing property if it does not exist in customisations
                        componentProps[key] = value;
                    }
            }
        }
        // Generate icon
        var item = builder_1(icon, customisations);
        // Add icon stuff
        for (var key$1 in item.attributes) {
            componentProps[key$1] = item.attributes[key$1];
        }
        if (item.inline) {
            if (isStyleString) {
                styleString = 'vertical-align: -0.125em; ' + styleString;
            }
            else {
                stylesList.unshift({
                    verticalAlign: '-0.125em',
                });
            }
            hasStyle = true;
        }
        // Generate node data
        var data = {
            attrs: componentProps,
            domProps: {
                innerHTML: ids_1(item.body),
            },
        };
        if (hasStyle) {
            data.style = isStyleString ? styleString : stylesList;
        }
        if (contextData) {
            ['on', 'ref'].forEach(function (attr) {
                if (contextData[attr] !== void 0) {
                    data[attr] = contextData[attr];
                }
            });
            ['staticClass', 'class'].forEach(function (attr) {
                if (contextData[attr] !== void 0) {
                    data.class = contextData[attr];
                }
            });
        }
        return createElement('svg', data);
    },
    /**
     * Add icon to storage that can later be used by name, for example: <iconify-icon icon="home" />
     */
    addIcon: function (name, data) {
        storage[name] = icon_1(data);
    },
    /**
     * Add collection to storage, allowing to call icons by name
     *
     * @param data Icon set
     * @param prefix Optional prefix to add to icon names, true if prefix from icon set should be used.
     */
    addCollection: function (data, prefix) {
        var iconPrefix = typeof prefix === 'string'
            ? prefix
            : prefix !== false && typeof data.prefix === 'string'
                ? data.prefix + ':'
                : '';
        iconSet_1(data, function (name, icon) {
            if (icon !== null) {
                storage[iconPrefix + name] = icon;
            }
        });
    },
};
var install = function installIconifyIcon(Vue) {
    if (install.installed)
        { return; }
    install.installed = true;
    Vue.component('IconifyIcon', IconifyIcon);
};
// Create module definition for Vue.use()
var plugin = {
    install: install,
};
// Auto-install when vue is found (eg. in browser via <script> tag)
var GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
}
else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}
// Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()
IconifyIcon.install = install;

/* harmony default export */ __webpack_exports__["default"] = (IconifyIcon);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);