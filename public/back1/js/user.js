$(function () {
    var currentPage = 1;
    var pageSize = 5;

    var currentId;
    var isDelete;

    render();
    function render() {
        $.ajax({
        type: 'get',
        url: '/user/queryUser',
        data: {
            page: currentPage,
            pageSize: pageSize
        },
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var htmlStr = template( "tpl", info );
            $('.lt_content tbody').html( htmlStr );

// 配置分页
    $('#paginator').bootstrapPaginator({
        bootstrapMajorVersion: 3,
        currentPage: info.page,
        totalPages: Math.ceil( info.total / info.size ),
        onPageClicked: function (a, b, c, page) {
            currentPage = page;
            render();
        }
    });

        }
    });
}
    


// 用事件委托给按钮注册点击事件
    $('.lt_content tbody').on('click', '.btn', function () {
        $('#userModal').modal('show');

        currentId = $(this).parent().data('id');
        isDelete = $(this).hasClass("btn-danger") ? 0 : 1;
    });

    $('#submitBtn').on("click", function () {
        console.log(currentId, isDelete);
        $.ajax({
            type: 'post',
            url: '/user/updateUser',
            data: {
                id: currentId,
                isDelete: isDelete
            },
            dataType: 'json',
            success: function (info) {
                if (info.success) {
                    $('#userModal').modal("hide");
                    render();
                }
            }
        })
        
    });














})