$( document ).ready(function() {

    var anchorname = location.hash; // получаем якори с ссылки
    console.log( "Anchore:"+anchorname );


    // Открываем всплывающее окно если в ссылке есть якорь
    function showModalByAnchor() {
        console.log("called show modal");

        var anchorname = location.hash;
        console.log( "Anchore:"+anchorname );

        if(anchorname) {
            console.log( anchorname );
            $(anchorname).css("display","block");
            $(anchorname).parent("div#modal").css("display","block");

            middleModal(); // центруем модальное окно
        }
    }



    showModalByAnchor(); // показываем модальное окно по якорю в ссылке



    //////////////////////////////////////////////////////////////////////////
    function middleModal(idmodal) {
        // получаем ширину модального окна
        var modalWidth = $("#modal "+idmodal).outerWidth(true);
        // считаем отступ слева для центровки модального окна
        var modalMarginLeft = modalWidth / 2;
        console.log( modalWidth );
        // получаем ширину модального окна
        var modalHeight = $("#modal "+idmodal).outerHeight(true);
        // считаем отступ слева для центровки модального окна
        var modalMarginTop = modalHeight / 2;
        console.log( modalHeight );

        // Текущие значения отступов
        var modalMarginLeftValue = $("#modal "+idmodal).css("margin-left");
        var modalMarginTopValue = $("#modal "+idmodal).css("margin-top");

        // Если мы еще не устанавливали отпусты, то установим их
        if(modalMarginLeftValue == "0px" && modalMarginTopValue == "0px"){
            // Устанавливаем отступ слева
            $("#modal "+idmodal).css( "margin-left", "-"+modalMarginLeft+"px" );
            // Устанавливаем отступ сверху
            $("#modal "+idmodal).css( "margin-top", "-"+modalMarginTop+"px" );
        }
    }
    //////////////////////////////////////////////////////////////////////////

    // при нажатии на крестик закрываем модальное окно
    $(".close-white").click(function() {
        // спрятать модальное окно
        $( this ).parents("div.block").css("display", "none");
        // спрятать фон модального окна
        $("#modal").css("display", "none");
    });

    //////////////////////////////////////////////////////////////////////////

    // Показываем модальное окно при нажатии на редактировать
    $(".icon.edit").click(function() {
        var blockid = $( this ).parents("div.multiblock").attr("id");
        if(blockid) {
            console.log( "#modal-"+blockid );
            $("#modal-"+blockid).css("display","block");
            $("#modal").css("display","block");

            event.preventDefault(); // убираем скачек при нажатии на якорь + якорь в ссылке
            middleModal("#modal-"+blockid); // центруем модальное окно
        }
    });

    //////////////////////////////////////////////////////////////////////////

});