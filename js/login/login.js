define(['jquery', 'bootstrap', 'bootstrapValidator', 'select','moment'],
    function($) {
        $(function() {
            var moment=require('moment')
            var k = moment().unix()*1000;
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
            })
            $('.lock .btn-wd').click(function(){
              location.href = './index.html';
            })
        });
    })
