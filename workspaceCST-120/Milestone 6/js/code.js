var tools = {
    hideToggle: () => {
        var y = $('#toHide');
        console.log(y.attr('id'));
        if (y.is(":visible")){
            y.hide();;
        } else {
            y.show();
        }
    }
};
