/**
 * Created by cissharp on 2/3/16.
 * This file contains the jQuery extension method to create simple accordians
 */
(function ($) {

    /**
     * Contains method to initialize plugin and destroy
     * @type {{titleClass: string, contentClass: string, init: methods.init, destroy: methods.destroy}}
     */
    var methods = {
        titleClass: 'accordian-section-title',
        contentClass: 'accordian-section-content',

        /**
         * Default initialization methoid
         * @param options options = {title:tselector, content:cselector}
         */
        init: function (options) {
            var selector = this.selector;
            $(selector).find(options.title).addClass(methods.titleClass);
            $(selector).find(options.content).addClass(methods.contentClass);
            $('.' + methods.titleClass).click(function (e) {
                if ($(e.target).is('.active')) {
                    closeAccordionSection();
                } else {
                    closeAccordionSection();
                    // Add active class to section title
                    $(this).addClass('active');
                    // Open up the hidden content panel
                    $(this).next('.' + methods.contentClass).slideDown(300).addClass('open');
                }
                e.preventDefault();
            });

            /**
             * Closure to close all accordians
             * @param selector: the selector element
             */
            function closeAccordionSection() {
                jQuery(selector + ' .' + methods.titleClass).removeClass('active');
                jQuery(selector + ' .' + methods.contentClass).slideUp(300).removeClass('open');
            }
        },

        /**
         * Unregisters the plugin
         * Use $(selector).simpleAccordian('destroy');
         */
        destroy: function () {
            // Unbind all events
            $( ' .' + methods.titleClass).unbind('click');
            $( ' .' + methods.contentClass).unbind('slideDown');
            $( ' .' + methods.contentClass).unbind('slideUp');

            // Remove all accordian related classes and styles
            $( ' .' + methods.contentClass).attr('style', '');
            $( ' .' + methods.titleClass).removeClass('active');
            $( ' .' + methods.contentClass).removeClass('open');

            // Finally remove the classes itself
            $( ' .' + methods.titleClass).removeClass(methods.titleClass);
            $( ' .' + methods.contentClass).removeClass(methods.contentClass);

        }
    };


    $.fn.extend({
        /**
         * Accordian function extension for jQuery
         * @param options options = {title:tselector, content:cselector}
         */
        simpleAccordian: function (methodOrOptions) {
            if (methods[methodOrOptions]) {
                return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
            } else if (typeof methodOrOptions === 'object') {
                return methods.init.apply(this, arguments);
            } else if (!methodOrOptions) {
                $.error("Please check methodOrOptions. You must have \'title\' and \'content\'.");
            }
            else {
                $.error('Method ' + methodOrOptions + ' does not exist on jQuery.simpleAccordian');
            }


        }
    });
})(jQuery);