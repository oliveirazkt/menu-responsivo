
$(document).ready(function(){

    $(window).resize(function(){
        atualizaLayout()
    })

    $("#controll-menu").on('click', function(){
        console.log('funcionou o click')
        console.log($("#page-content").attr('class'))
    })
})