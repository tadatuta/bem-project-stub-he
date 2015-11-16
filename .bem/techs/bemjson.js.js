'use strict';

var fs = require('fs'),
    bem = require('bem'),
    PATH = bem.require('path'),
    Template = require('bem/lib/template'),
    html2bemjson = require('html2bemjson'),
    bemUtil = require('bem/lib/util');

exports.API_VER = 2;

exports.techMixin = {

    getTemplate: function(path, suffix, vars) {
        return Template.process([
            "({",
            "    block: 'page',",
            "    title: '{{bemBlockName}}',",
            "    head: [",
            "        { elem: 'css', url: '{{bemBlockName}}.min.css' }",
            "    ],",
            "    scripts: [",
            "        { elem: 'js', url: '{{bemBlockName}}.min.js' }",
            "    ],",
            "    content: [",
            "        'block content'",
            "    ]",
            "})"], vars);
    },

    getCreateResult: function(path, suffix, vars) {
        var basename = this.getPath(PATH.basename(path, '.' + suffix),
                                    'html'),
            htmlPath = PATH.join(PATH.dirname(path), basename),
            html = bemUtil.isFile(htmlPath) ? fs.readFileSync(htmlPath, 'utf-8') : false,
            json;

        if (!html) return this.getTemplate(path, suffix, vars);

        try {
            json = html2bemjson.convert(html);
        } catch(e) {
            console.log(html2bemjson.convert(html));
            throw e;
        }

        return '(' + JSON.stringify(json, null, 4) + ')';
    },

    storeCreateResult: function(path, suffix, res, force) {
        bemUtil.mkdirs(PATH.dirname(path));
        return force?
            bemUtil.writeFile(path, res) :
            bemUtil.writeFileIfDiffers(path, res);
    },

    getDependencies: function() {
        return ['html'];
    }

};
