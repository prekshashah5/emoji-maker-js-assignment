$('document').ready(function() {
    function skin() {
        $('#select-skin-card').css('display', "block");
        $("#select-eyes-card").css("display", "none");
        $("#select-mouth-card").css("display", "none");
    }
    
    function eyes() {
        $("#select-skin-card").css("display", "none");
        $('#select-eyes-card').css('display', "block");
        $("#select-mouth-card").css("display", "none");
    }

    function mouth() {
        $("#select-skin-card").css("display", "none");
        $("#select-eyes-card").css("display", "none");
        $('#select-mouth-card').css('display', "block");
    }

    $('#show-skin-card').click(function() {
        skin();
    })

    $('.show-eyes-card').click(function() {
        eyes();
    })

    $('#show-mouth-card').click(function() {
        mouth();
    })
    
    $('#yellow-skin').click(function() {
        $('#skin').attr('src', './assets/skin/yellow.png');
        eyes();
    })
    $('#green-skin').click(function() {
        $('#skin').attr('src', './assets/skin/green.png')
        eyes();
    })
    $('#red-skin').click(function() {
        $('#skin').attr('src', './assets/skin/red.png')
        eyes();
    })

    $('#eye-normal').click(function() {
        $('#eyes').attr('src', './assets/eyes/normal.png');
        mouth();
    })
    $('#eye-closed').click(function() {
        $('#eyes').attr('src', './assets/eyes/closed.png')
        mouth();
    })
    $('#eye-long').click(function() {
        $('#eyes').attr('src', './assets/eyes/long.png')
        mouth();
    })
    $('#eye-laughing').click(function() {
        $('#eyes').attr('src', './assets/eyes/laughing.png')
        mouth();
    })
    $('#eye-rolling').click(function() {
        $('#eyes').attr('src', './assets/eyes/rolling.png')
        mouth();
    })
    $('#eye-winking').click(function() {
        $('#eyes').attr('src', './assets/eyes/winking.png')
        mouth();
    })
    
    $('#mouth-open').click(function() {
        $('#mouth').attr('src', './assets/mouth/open.png');
    })
    $('#mouth-smiling').click(function() {
        $('#mouth').attr('src', './assets/mouth/smiling.png')
    })
    $('#mouth-straight').click(function() {
        $('#mouth').attr('src', './assets/mouth/straight.png')
    })
    $('#mouth-sad').click(function() {
        $('#mouth').attr('src', './assets/mouth/sad.png')
    })
    $('#mouth-teeth').click(function() {
        $('#mouth').attr('src', './assets/mouth/teeth.png')
    })
})
