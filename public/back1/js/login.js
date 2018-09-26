$(function () {
    // 校验规则：
    // 1. 用户名不能为空
    // 2. 用户密码不能为空
    // 3. 用户密码长度为6 - 12位
    $('#form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: "用户名不能为空"
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: '用户名长度必须2-6位'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: "密码名不能为空"
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: '密码长度必须6-12位'
                    }
                }
            }
        }
    });

});