define(['jquery', 'bootstrap', 'bootstrapValidator', 'select'],
    function($) {
        $(function() {
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
        });
    })
