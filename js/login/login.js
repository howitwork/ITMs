define(['jquery', 'bootstrap', 'bootstrapValidator', 'select', 'moment'],
  function($) {
    $(function() {
      var moment = require('moment');
      var k = moment().unix() * 1000;
      console.log(moment(k).format('YYYY-MM-DD HH:mm:ss'));
      $('.selectpicker').selectpicker('refresh');
      $('.form-horizontal').bootstrapValidator({
        autoFocus: true,
        feedbackIcons: {
          valid: 'fa fa-check',
          invalid: 'fa fa-times',
          validating: 'fa fa-refresh'
        },
        fields: {
          projectName: {
            validators: {
              notEmpty: {
                message: '用户名不能为空'
              }
            }
          },
          userName: {
            validators: {
              notEmpty: {
                message: '用户名不能为空'
              }
            }
          },
          userPwd: {
            validators: {
              notEmpty: {
                message: '密码不能为空'
              }
            }
          }
        }
      });
      //禁止浏览器返回操作
      if (window.history && window.history.pushState) {
        $(window).on('popstate', function() {
          window.history.pushState('forward', null, '#');
          window.history.forward(1);
        });
      }
      window.history.pushState('forward', null, '#'); //在IE中必须得有这两行
      window.history.forward(1);
      $('#login').click(function() {
        history.go(-3);
      });
      $('#unLock').click(function() {
        history.go(-3);
      });
    });
  });
