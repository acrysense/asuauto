$(document).ready(function() {
    // FIXED HEADER
    window.onscroll = function() {
        const headerMain = $('.header__bottom');
        window.pageYOffset > 150 ? headerMain.addClass('header-fixed') : headerMain.removeClass('header-fixed');
    }

    // CATALOG
    const catalogToggle = $('#catalog-toggle')
	const directory = $('#directory')

    catalogToggle.click(function () {
        catalogToggle.toggleClass('catalog-toggle_active');
        directory.toggleClass('directory_active');
        overlay.toggleClass('active');
    });

    // OVERLAY
    const overlay = $('.overlay');
    
    overlay.click(function() {
        if (hamburgerWrapper.hasClass('active')) {
            $('body').toggleClass('scroll-disabled');
            hamburgerToggle.toggleClass('active');
            hamburgerWrapper.toggleClass('active');
            overlay.toggleClass('active');

            if (hamburgerMain[0].style.display == 'none') {
                mobileMenuCategory.hide();
                hamburgerMain.show();
            }
        }
        else if (filtersWrapper.hasClass('active')) {
            $('body').toggleClass('scroll-disabled');
            filtersWrapper.toggleClass('active');
            overlay.toggleClass('active');
        }
        else if (directory.hasClass('directory_active')) {
            catalogToggle.toggleClass('catalog-toggle_active');
            directory.toggleClass('directory_active');
            overlay.toggleClass('active');
        }
    });

    // HAMBURGER
    const hamburgerToggle = $('#hamburger');
	const hamburgerWrapper = $('#hamburger-wrapper');
    const hamburgerMain = $('#hamburger-main');

	hamburgerToggle.click(function () {
        if (filtersWrapper.hasClass('active')) {
            $('body').toggleClass('scroll-disabled');
            filtersWrapper.toggleClass('active');
            overlay.toggleClass('active');
        }
        if (hamburgerMain[0].style.display == 'none') {
            mobileMenuCategory.hide();
            hamburgerMain.show();
        }
        if (mobileSearch[0].style.display == 'block') {
            mobileSearch.slideToggle(300);
        }
        $('body').toggleClass('scroll-disabled');
		hamburgerToggle.toggleClass('active');
        hamburgerWrapper.toggleClass('active');
        overlay.toggleClass('active');
	});

    // MOBILE MENU
    const mobileMenuLink = $('.mobile-menu__link');
    const mobileMenuCategory = $('.mobile-category');
    const mobileMenuCategoryBack = $('.mobile-category__back');

    mobileMenuLink.click(function () {
        let dataParent = $(this).attr('data-parent');
        hamburgerMain.hide();
        $('.mobile-category[data-parent="' + dataParent +'"]').toggle();
        return false;
    });

    mobileMenuCategoryBack.click(function () {
        mobileMenuCategory.hide();
        hamburgerMain.show();
    });

    // MOBILE SEARCH
    const search = $('#search');
    const mobileSearch = $('#mobile-search');

    search.click(function () {
        if (hamburgerWrapper.hasClass('active') || filtersWrapper.hasClass('active')) return false;
        mobileSearch.slideToggle(300);
    });

    // FILTERS PRODUCTS
    const filtersToggle = $('#add-filters__opening');
    const filtersWrapper = $('#all-filters');

	filtersToggle.click(function () {
        if (mobileSearch[0].style.display == 'block') {
            mobileSearch.slideToggle(300);
        }
        $('body').toggleClass('scroll-disabled');
        filtersWrapper.toggleClass('active');
        overlay.toggleClass('active');
    });

    // HIDING AND OPENING FILTER BLOCKS
    $('.filters-categories__link').click(function(event) {
        $(this).toggleClass('filters-categories__link_active').next().slideToggle(300);
    });

    $('.filters__title').click(function(event) {
        $(this).toggleClass('filters__title_active').next().slideToggle(300);
    });

    // PLUS AND MINUS (PRODUCT.HTML)
    $('#body__button_minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    
    $('#body__button_plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    // TABS
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
});