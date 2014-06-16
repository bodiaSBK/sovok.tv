$( document ).ready(function() {

    // Функция для определенеия высоты футера
    function footerHeight (element) {
        var height = $( window ).height() - $(".header").height() - $(".main-body").outerHeight(true);
        $(element).css("height",height+"px");
    }




    // Получаем дочерный блок враппера внутри центрального блока
    /*
     <div class="main-body">
        <div class="wrapper">
            <div class="login"></div>
        </div>
    </div>
     */
    var getMainChildBlock = $(".main-body").children().children().first();

    // Максимальная высота центрального блока для автоматичесткого маржина
    var mainHeightSmall = 486;

    //Если высота дочерного бока враппера внутри центрального блока меньше Максимальной высоты централки
    if(getMainChildBlock.outerHeight(true) == mainHeightSmall){
        console.log("big block");
    }
    else if(getMainChildBlock.outerHeight(true) < mainHeightSmall){

        // Делаем сверху стандартный отступ в враппере
        var mainBlockMarginTop = (mainHeightSmall - $(".main-body").children().first().outerHeight(true)) / 2;
        console.log(mainBlockMarginTop);
        $(getMainChildBlock.parent()).css("padding-top","70px");

        // Просчитываем оттсуп снизу в враппере(максимальная высота - текущая высота враппера с отступом)
        var mainBlockMarginBottom = mainHeightSmall - $(".main-body").children().first().outerHeight(true);
        // Устанавливаем отступ
        $(getMainChildBlock.parent()).css("padding-bottom",mainBlockMarginBottom);

    }


    // Вызов функции при ресайзе окна!
    $( window ).resize(function() {
        footerHeight(".footer");
    });

    // Первый запуск функции
    footerHeight(".footer");

});