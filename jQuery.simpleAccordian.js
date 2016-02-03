/**
 * Created by cissharp on 2/3/16.
 * This file contains the jQuery extension method to create simple accordians
 */
(function () {
    $.fn.extend({
        /**
         * Accordian function extension for jQuery
         * @param title: Title selector
         * @param content: Content selector
         */
        simpleAccordian: function (title, content) {
            var selector = this.selector;
            $(selector).find(title).addClass('accordian-section-title');
            $(selector).find(content).addClass('accordian-section-content');
            $('.accordian-section-title').click(function (e) {
                if ($(e.target).is('.active')) {
                    closeAccordionSection();
                } else {
                    closeAccordionSection();
                    // Add active class to section title
                    $(this).addClass('active');
                    // Open up the hidden content panel
                    $(this).next('.accordian-section-content').slideDown(300).addClass('open');
                }
                e.preventDefault();
            });

            /**
             * Closure to close all accordians
             * @param selector: the selector element
             */
            function closeAccordionSection() {
                jQuery(selector + ' .accordian-section-title').removeClass('active');
                jQuery(selector + ' .accordian-section-content').slideUp(300).removeClass('open');
            }
        }
    });
})(jQuery);