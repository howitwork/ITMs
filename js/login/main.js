// requirejs 的简单配置
require.config({
    baseUrl: './js/login',
    paths: {
        jquery: '../components/jquery/jquery.min',
        bootstrap: '../components/bootstrap/bootstrap.min',
        bootstrapValidator: '../components/bootstrapValidator/bootstrapValidator.min',
        bootstrapValidatorZh: '../components/bootstrapValidator/language/zh_CN',
        select: '../components/select/bootstrap-select.min',
        moment: '../components/moment/moment.min'
    },
    shim: {
        bootstrap : {
            deps : [ 'jquery'],
            exports : 'bootstrap'
        },
        bootstrapValidator : {
            deps : [ 'jquery'],
            exports : 'bootstrapValidator'
        },
        bootstrapValidatorZh : {
            deps : [ 'jquery','bootstrapValidator'],
            exports : 'bootstrapValidatorZh'
        },
        select : {
            deps : [ 'jquery','bootstrap'],
            exports : 'select'
        }
    }
});

require(['require','jquery','login'],function(require,$){
  // var module = document.getElementById('scriptid').getAttribute('module');//模块（js名称）
  // var module = $('#scriptid').attr('module');//模块（js名称）
  // require([module], function(){});
})
