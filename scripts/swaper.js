$(function() {

    $(".zone-content").mouseenter(function(e) {
        var hide_div = $(this).children('.svg-txt-hide');

        skill_name = hide_div.text();
        $('.describe_skill').text(skill_name);

        e.stopPropagation();

    }).mouseleave(function(e) {

        var hide_div = $(this).children('.svg-txt-hide');

        $('.describe_skill').text('My skills');
    });
});