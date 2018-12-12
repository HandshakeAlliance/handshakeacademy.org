let $ = require('jquery');
let toastr = require('toastr');

let body = $('body'),
    navbar = $('.navbar'),
    header = $('.header');

let hasHeader = header.length,
    mainOffsetTop = $('body > main').offset().top,
    prevOffsetTop = 0,
    scrollOffsetTop = 20,
    navbarHeight = navbar.innerHeight(),
    headerHeight = header.innerHeight();

// NAVBAR
let navbarToggle = () => {
  body.toggleClass('navbar-open');
  if (body.hasClass('navbar-open')) {
    navbar.prepend('<div class="backdrop backdrop-navbar"></div>');
  }
};
let navbarClose = () => {
  body.removeClass('navbar-open');
  $('.backdrop-navbar').remove();
};
$(document).on('click', '.navbar-toggler', () => {
  navbarToggle();
});
$(document).on('click', '.backdrop-navbar', () => {
  navbarClose();
});

// SIDEBAR
let seen = {};
let sidebarItems = '';
$('#post article h2').each((_, el) => {
  let tag = $(el),
      links = '';

  tag.nextUntil('h2', 'h3').each((_, subel) => {
    let subtag = $(subel),
        href = subtag.find('a').attr('href');

    if (!seen[href]) {
      seen[href] = 1;
    } else {
      subtag.find('a').attr('href', (_, attr) => (attr + '-' + seen[href]));
      subtag.find('span').attr('id', (_, attr) => (attr + '-' + seen[href]));
      seen[href]++;
    }

    links += `<a class="nav-link" href="${subtag.find('a').attr('href')}">${subtag.find('span').text()}</a>`
  });

  let angle = links === '' ? '' : '<i class="nav-angle"></i>';
  sidebarItems += `
    <li class="nav-item">
      <a class="nav-link" href="${tag.find('a').attr('href')}">${tag.find('span').text()} ${angle}</a>
      <div class="nav">
        ${links}
      </div>
    </li>
  `;
});
$('#to-replace').replaceWith(sidebarItems);
$('#replace-top-nav').replaceWith($('.nav-sidebar').html());

$(document).on('click', '.nav-sidebar > .nav-item > .nav-link', function() {
  $('.nav-sidebar > .nav-item > .nav-link').each((_, el) => {
    $(el).removeClass('active');
  });
  let link = $(this);
  link.toggleClass('active');
});

let updateSidebarWidth = () => {
  $('.sidebar').each((_, el) => {
    let tag = $(el);
    let width = tag.closest('div').width();
    tag.css('width', width);

    if (body.width() / width < 1.8) {
      tag.addClass('is-mobile-wide');
    }
  });
};

updateSidebarWidth();
$(window).on('resize', () => {
  updateSidebarWidth();
});

$('.sidebar').css('visibility', 'visible');

// HELPERS
let smoothlyScrollTo = (pos, cb) => {
  $('html, body').animate({scrollTop: pos}, 600, 'swing', cb);
};

let toggleStickClass = (tag) => {
  let requiredClass = 'navbar-scrolled';
  if ( hasHeader ) {
    requiredClass = 'header-scrolled';
  }

  if (body.hasClass(requiredClass)) {
    tag.addClass('stick');
  }
  else {
    tag.removeClass('stick');
  }
};

// SCROLL LISTENERS
let windowScrollActions = () => {
  let windowTop = $(window).scrollTop();

  // .body-scrolled
  if (windowTop > 1) {
    body.addClass('body-scrolled');
  } else {
    body.removeClass('body-scrolled');
  }

  // .navbar-scrolled
  if (windowTop > navbarHeight) {
    body.addClass('navbar-scrolled');
  } else {
    body.removeClass('navbar-scrolled');
  }

  // .header-scrolled
  if (windowTop > headerHeight) {
    body.addClass('header-scrolled');
  } else {
    body.removeClass('header-scrolled');
  }

  // .main-scrolled
  if (windowTop > mainOffsetTop) {
    body.addClass('main-scrolled');
  } else {
    body.removeClass('main-scrolled');
  }

  $('[data-sticky="true"]').each((_, el) => {
    let tag = $(el);
    let top = tag.offset().top;

    if (!tag.hasDataAttr('original-top')) {
      tag.attr('data-original-top', top);
    }

    let stickStart = tag.dataAttr('original-top');

    if (windowTop > stickStart) {
      tag.addClass('stick');
    } else {
      tag.removeClass('stick');
    }
  });

  $('[data-navbar="sticky"]').each((_, el) => {
    let tag = $(el);
    toggleStickClass(tag);
  });

  $('[data-navbar="fixed"]').each((_, el) => {
    let tag = $(el);
    if (body.hasClass('body-scrolled')) {
      tag.addClass('stick');
    } else {
      tag.removeClass('stick');
    }
  });

  $('.sidebar-sticky').each((_, el) => {
    let tag = $(el);
    toggleStickClass(tag);
  });

  $('.header.fadeout').css('opacity', (1 - windowTop - 200 / window.innerHeight));

  prevOffsetTop = windowTop;
};

if ($('[data-navbar="fixed"], [data-navbar="sticky"], [data-navbar="smart"]').length) {
  scrollOffsetTop = navbarHeight;
}

windowScrollActions();
$(window).on('scroll', function() {
  windowScrollActions()
});

// SMOOTH SCROLL
$(document).on('click', "a[href^='#']", function() {
  if ($(this).attr('href').length < 2) {
    return;
  }

  if ($(this)[0].hasAttribute('data-toggle')) {
    return;
  }

  let target = $($(this).attr('href'));
  if (target.length) {
    let targetTop = target.offset().top,
        windowTop = $(window).scrollTop();

    let offset = 0;
    if (!(targetTop > windowTop && $('.navbar[data-navbar="smart"]').length)) {
      offset = scrollOffsetTop;
    }

    $('.nav-sidebar').removeClass('spy');
    smoothlyScrollTo(targetTop - offset, () => {
      $('.nav-sidebar').addClass('spy');
    });

    if (body.hasClass('navbar-open')) {
      navbarClose();
    }

    if (body.hasClass('sidebar-open')) {
      sidebarClose();
    }

    return false;
  }
});

// SCROLLSPY
$('.nav-sidebar').addClass('spy');
$('body').scrollspy({
  target: '.nav-sidebar.spy',
  offset: 100
});

(function disabledLink() {
  const links = document.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", event => {
      if (links[i].getAttribute("href") === "#" || links[i].getAttribute("href") === "") {
        event.preventDefault();
        console.log("Whoops, looks like this link hasn't been set up yet. Check back soon!");
      }
    });
  }
})();

//  -------- User Signup Functionality ---------
window.handleSubmit = function (e) {
  e.preventDefault();

  toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: false,
    progressBar: true,
    positionClass: "toast-bottom-center",
    preventDuplicates: true,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut"
  };

  let validForm = true; // Set initial state of valid form to true

  let email = $(`input[name="EMAIL"]`);

  if (email.val() === "") {
    //Handle some error here
    return;
  }

  let formData = email.serialize();

  $.ajax({
    type: "post",
    url:
      "https://urkel.us19.list-manage.com/subscribe/post-json?u=4f327a17a091f4dc9fddf20f5&amp;id=d2f2203f03&c=?",
    data: formData,
    cache: false,
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    encode: true,
    error: function(err) {
      console.log("Uh, oh. There was an error:", err);
    }
  }) // All done! Let's show the user a success message:
    .done(function(data) {
      if (data.result === "error") {
        toastr.error('Please enter an email');
        return;
      } else {
        email[0].value = "";
        $("#newsletter-form").hide();
        $(".successMessage").show(); // Show the checkmark
        $("svg").addClass("active"); // Start animation of checkmark
      }
    });
}
