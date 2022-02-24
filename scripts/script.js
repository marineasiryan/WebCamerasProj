window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 1500);
}


$(document).ready(function () {
  $("#opencameras").click(function () {
    $("#panel").slideToggle("slow");
    $("#show_camera_icon").toggleClass("show_camera_rotate");

  });
});
$(document).ready(function () {
  $("#show_comment").click(function () {
    $("#panel1").slideToggle("slow");
  });
});
$(document).ready(function () {
  $("#show_new_comment").click(function () {
    $("#panel2").slideToggle("slow");
  });
});


$(function () {
  $('.archive option:selected').hide(); //initialise

  $('.archive').change(function () {

    $('.archive option').show(200, function () {

      $('.archive option:selected').hide();

    });

  });
})
$(document).ready(function () {
  $(document).on('click', '.signup-tab', function (e) {
    e.preventDefault();
    $('#signup-taba').tab('show');
    $('#loginModalLabel').hide();
    $('#SignupModalLabel').show();
  });

  $(document).on('click', '.signin-tab', function (e) {
    e.preventDefault();
    $('#signin-taba').tab('show');
    $('#loginModalLabel').show();
    $('#SignupModalLabel').hide();
  });

  $(document).on('click', '.forgetpass-tab', function (e) {
    e.preventDefault();
    $('#forgetpass-taba').tab('show');
    $('#SignupModalLabel').hide();
    $('#loginModalLabel').hide();
    $('#Forgetpassword').show();


  });
});

$(document).ready(function () {
  $(".lang-flag1").click(function () {
    $(".language-dropdown1").toggleClass("open");
    $(".language-dropdown1").css({
      "filter": "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"

    });
  });
  $("ul.lang-list1 li").click(function () {
    $("ul.lang-list1 li").removeClass("selected1");
    $(this).addClass("selected1");
    if ($(this).hasClass('lang-en1')) {
      $(".language-dropdown1").find(".lang-flag1").addClass("lang-en1").removeClass("lang-es1").removeClass("lang-pt1");
      $("#lang_selected1").html("<p>EN</p>")
    } else if ($(this).hasClass('lang-pt1')) {
      $(".language-dropdown1").find(".lang-flag1").addClass("lang-pt1").removeClass("lang-es1").removeClass("lang-en1");
      $("#lang_selected1").html("<p>PT</p>")
    } else {
      $(".language-dropdown1").find(".lang-flag1").addClass("lang-es1").removeClass("lang-en1").removeClass("lang-pt1");
      $("#lang_selected1").html("<p>ES</p>")
    }
    $(".language-dropdown1").removeClass("open");
    $(".language-dropdown1").css({
      "filter": "none"

    });
  });
})


$(function () {
  $('#ChangeToggle').click(function () {
    $('#navbar-hamburger').toggleClass('hidden');
    $('#navbar-close').toggleClass('hidden');
  });
});

$(document).ready(function () {

  $('#stars li').on('mouseover', function () {
    var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

    $(this).parent().children('li.star').each(function (e) {
      if (e < onStar) {
        $(this).addClass('hover');
      }
      else {
        $(this).removeClass('hover');
      }
    });

  }).on('mouseout', function () {
    $(this).parent().children('li.star').each(function (e) {
      $(this).removeClass('hover');
    });
  });


  /* 2. Action to perform on click */
  $('#stars li').on('click', function () {
    var onStar = parseInt($(this).data('value'), 10); // The star currently selected
    var stars = $(this).parent().children('li.star');

    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }

    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }

    var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
    var msg = "";
    if (ratingValue > 1) {
      msg = "Thanks! You rated this " + ratingValue + " stars.";
    }
    else {
      msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
    }
    responseMessage(msg);

  });


});


function responseMessage(msg) {
  $('.success-box').fadeIn(200);
  $('.success-box div.text-message').html("<span>" + msg + "</span>");
}



function increment_dislike() {
  var dislike_counter = document.getElementsByClassName("like_count")[0].innerHTML;
  dislike_counter--
  document.getElementsByClassName("like_count")[0].innerHTML = dislike_counter;
  document.getElementsByClassName("like_count")[0].style.color = 'red'
}

function increment_like() {
  var like_counter = document.getElementsByClassName("like_count")[0].innerHTML;
  like_counter++;
  document.getElementsByClassName("like_count")[0].innerHTML = like_counter;
  document.getElementsByClassName("like_count")[0].style.color = 'green'

}



$(document).ready(function () {
  $(".lang-flag3").click(function () {
    $(".language-dropdown3").toggleClass("open");
    $(".language-dropdown3").css({
      "filter": "drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.07))"
    });
  });
  $("ul.lang-list3 li").click(function () {
    $("ul.lang-list3 li").removeClass("selected3");
    $(this).addClass("selected3");
    if ($(this).hasClass('lang-en3')) {
      $(".language-dropdown3").find(".lang-flag3").addClass("lang-en3").removeClass("lang-es3").removeClass("lang-pt3");
      $("#rus3").css("display", "flex")
      $("#fran3").css("display", "none")
      $("#chin3").css("display", "none")
      $("#lang_selected3").html("<p>EN</p>")
    } else if ($(this).hasClass('lang-pt3')) {
      $(".language-dropdown3").find(".lang-flag3").addClass("lang-pt3").removeClass("lang-es3").removeClass("lang-en3");
      $("#rus3").css("display", "none")
      $("#fran3").css("display", "flex")
      $("#chin3").css("display", "none")
      $("#lang_selected3").html("<p>PT</p>")
    } else {
      $(".language-dropdown3").find(".lang-flag3").addClass("lang-es3").removeClass("lang-en3").removeClass("lang-pt3");
      $("#rus3").css("display", "none")
      $("#fran3").css("display", "none")
      $("#chin3").css("display", "flex")
      $("#lang_selected3").html("<p>ES</p>")
    }
    $(".language-dropdown3").removeClass("open");
    $(".language-dropdown3").css({
      "filter": "none"

    });
  });
})



$(".custom-select1").each(function() {
  var classes = $(this).attr("class"),
      id      = $(this).attr("id"),
      name    = $(this).attr("name");
  var template =  '<div class="' + classes + '">';
  template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
  template += '<div class="custom-options">';
  $(this).find("option").each(function() {
      template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
  });
  template += '</div></div>';

  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
  $(this).parents(".custom-options").addClass("option-hover");
}, function() {
  $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function() {
  $('html').one('click',function() {
      $(".custom-select1").removeClass("opened");
  });
  $(this).parents(".custom-select1").toggleClass("opened");
  event.stopPropagation();
});
$(".custom-option").on("click", function() {
  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select1").removeClass("opened");
  $(this).parents(".custom-select1").find(".custom-select-trigger").text($(this).text());
});



// scroll to top
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.go-top').fadeIn(200);
    } else {
      $('.go-top').fadeOut(200);
    }
  });

  $('.go-top').click(function(event) {
    event.preventDefault();

    $('html, body').animate({scrollTop: 0}, 300);
  })
});