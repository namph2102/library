"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSort = exports.createLogger = void 0;
const logger_lib_1 = require("./package/logger.lib");
exports.createLogger = logger_lib_1.default;
const sort_lib_1 = require("./package/sort.lib");
exports.handleSort = sort_lib_1.default;
const SwisskitUtil = require("./package/text.lib");
exports.default = SwisskitUtil;
