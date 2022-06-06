import { isSp } from './sp';

export function calendar() {

	////////////////////////////////////
	//  Calendar
	////////////////////////////////////
    // the semi-colon before function invocation is a safety net against concatenated
    // scripts and/or other plugins which may not be closed properly.
    var none_day = ['3-10', '3-11', '4-14', '4-20'];
    var selected_day = "";
    (function ($, window, document, undefined) {

    "use strict";
    var this_date = new Date();
    var this_month = this_date.getMonth()+1;
    var display_month;
    // Create the defaults once
    var pluginName = "simpleCalendar",
        defaults = {
        months: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], //string of months starting from january
        days: ['日' ,'月', '火', '水', '木', '金', '土'], //string of days starting from sunday
        displayYear: true, // display year in header
        fixedStartDay: true, // Week begin always by monday or by day set by number 0 = sunday, 7 = saturday, false = month always begin by first day of the month
        displayEvent: true, // display existing event
        disableEventDetails: false, // disable showing event details
        disableEmptyDetails: false, // disable showing empty date details
        events: [], // List of event
        onInit: function (calendar) {}, // Callback after first initialization
        onMonthChange: function (month, year) {}, // Callback on month change
        onDateSelect: function (date, events) {}, // Callback on date selection
        onEventSelect: function () {},              // Callback fired when an event is selected     - see $(this).data('event')
        onEventCreate: function( $el ) {},          // Callback fired when an HTML event is created - see $(this).data('event')
        onDayCreate:   function( $el, d, m, y ) {}  // Callback fired when an HTML day is created   - see $(this).data('today'), .data('todayEvents')
        };

    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.currentDate = new Date();
        this.init();
    }

    // Avoid Plugin.prototype conflicts
    $.extend(Plugin.prototype, {
        init: function () {
        var container = $(this.element);
        var todayDate = this.currentDate;

        var calendar = $('<div class="calendar"></div>');
        var header = $('<header>' +
            '<h2 class="month"></h2>' +
            '<a class="simple-calendar-btn btn-prev" href="#"></a>' +
            '<a class="simple-calendar-btn btn-next" href="#"></a>' +
            '</header>');

        this.updateHeader(todayDate, header);
        calendar.append(header);

        this.buildCalendar(todayDate, calendar);
        container.append(calendar);

        this.bindEvents();
        this.noneDaySet(this.currentDate);
        this.settings.onInit(this);
        if(display_month == this_month){
            $(".btn-prev").css('color', '#bdbdbd');
        }
        
        },
        displayWarnSchedule:function(){
        var flag = false;
        return flag;
        
        },
        noneDaySet:function (date){
            var current_month = this.settings.months[date.getMonth()];
            $('.day').each(function(){
                for (var i=0; i< none_day.length; i++){
                    const split_val = none_day[i].split('-');
                    if(current_month == split_val[0] && $(this).html() == split_val[1]){
                        $(this).addClass('none');
                    }
                }
            })
        },

        displayAbleReservation:function (){
        },

        //Update the current month header
        updateHeader: function (date, header) {
        var monthText = "";
        display_month = this.settings.months[date.getMonth()];
        monthText += this.settings.displayYear ? ' <div class="year_and_month">' + date.getFullYear() +'<span>'+this.settings.months[date.getMonth()] +'月</span>' :  '</div>';
        //display able reservation added 2021.3.10
        this.displayAbleReservation();
        this.noneDaySet(this.currentDate);
        this.displayWarnSchedule();
        header.find('.month').html(monthText);
        if(display_month == this_month){
            $(".btn-prev").css('color', '#bdbdbd');
        }else{
            $(".btn-prev").css('color', '#333333');
        }
        },

        //Build calendar of a month from date
        buildCalendar: function (fromDate, calendar) {
        var plugin = this;

        calendar.find('table').remove();

        var body = $('<table></table>');
        var thead = $('<thead></thead>');
        var tbody = $('<tbody></tbody>');

        //setting current year and month
        var y = fromDate.getFullYear(), m = fromDate.getMonth();

        //first day of the month
        var firstDay = new Date(y, m, 1);
        //last day of the month
        var lastDay = new Date(y, m + 1, 0);
        // Start day of weeks
        var startDayOfWeek = firstDay.getDay();

        if (this.settings.fixedStartDay !== false) {
            // Backward compatibility
            startDayOfWeek =  this.settings.fixedStartDay ? 1 : this.settings.fixedStartDay;

            // If first day of month is different of startDayOfWeek
            while (firstDay.getDay() !== startDayOfWeek) {
            firstDay.setDate(firstDay.getDate() - 1);
            }
            // If last day of month is different of startDayOfWeek + 7
            while (lastDay.getDay() !== ((startDayOfWeek + 6) % 7)) {
            lastDay.setDate(lastDay.getDate() + 1);
            }
        }

        //Header day in a week ( (x to x + 7) % 7 to start the week by monday if x = 1)
        for (var i = startDayOfWeek; i < startDayOfWeek + 7; i++) {
            thead.append($('<td>' + this.settings.days[i % 7].substring(0, 3) + '</td>'));
        }

        //For firstDay to lastDay
        for (var day = firstDay; day <= lastDay; day.setDate(day.getDate())) {
            var tr = $('<tr></tr>');
            //For each row
            for (var i = 0; i < 7; i++) {
            var selected_Month = day.getMonth()+1;
            var selected_day= day.getFullYear()+'-'+selected_Month+'-'+day.getDate();
            var td = $('<td><div class="day" data-date="' + selected_day + '">' + day.getDate() + '</div></td>');

            var $day = td.find('.day');


            //if today is this day
            if (day.toDateString() === (new Date).toDateString()) {
                $day.addClass("today");
            }

            //if day is not in this month
            if (day.getMonth() != fromDate.getMonth()) {
                $day.addClass("disabled");
            }

            // filter today's events
            var todayEvents = plugin.getDateEvents(day);

            // associate some data available from the onDayCreate callback
            $day.data( 'todayEvents', todayEvents );

            // simplify further customization
            this.settings.onDayCreate( $day, day.getDate(), m, y );

            tr.append(td);
            day.setDate(day.getDate() + 1);
            }
            tbody.append(tr);
        }

        body.append(thead);
        body.append(tbody);
        
        

        calendar.append(body);
        },
        changeMonth: function (value) {
        this.currentDate.setMonth(this.currentDate.getMonth() + value, 1);
        this.buildCalendar(this.currentDate, $(this.element).find('.calendar'));
        this.updateHeader(this.currentDate, $(this.element).find('.calendar header'));
        this.settings.onMonthChange(this.currentDate.getMonth(), this.currentDate.getFullYear())
        },

        //Init global events listeners
        bindEvents: function () {
        var plugin = this;

        //Click previous month
        $(plugin.element).on('click', '.btn-prev', function ( e ) {
            if(display_month == this_month){
                return;
            }
            plugin.changeMonth(-1)
            e.preventDefault();
        });

        //Click next month
        $(plugin.element).on('click', '.btn-next', function ( e ) {
            
            plugin.changeMonth(1);
            e.preventDefault();
        });

        //Binding day event
        $(plugin.element).on('click', '.day', function (e) {
            if($(this).hasClass('disabled') || $(this).hasClass('none')){
                return false;
            }else{
                selected_day = $(this).attr('data-date');
                $(".day").each(function(){
                $(this).removeClass("select");
                })
                $(this).addClass("select");
                $("#selected-deliver-day").attr('value', selected_day);
            }
        });

        //Binding event container close
        $(plugin.element).on('click', '.event-container .close', function (e) {
            plugin.empty(e.pageX, e.pageY);
        });
        },
        displayEvents: function (events) {
        var plugin = this;
        var container = $(this.element).find('.event-wrapper');

        events.forEach(function (event) {
            // var startDate = new Date(event.startDate);
            // var endDate = new Date(event.endDate);
            // var $event = $('' +
            //   '<div class="event">' +
            //   ' <div class="event-hour">' + startDate.getHours() + ':' + (startDate.getMinutes() < 10 ? '0' : '') + startDate.getMinutes() + '</div>' +
            //   ' <div class="event-date">' + plugin.formatDateEvent(startDate, endDate) + '</div>' +
            //   ' <div class="event-summary">' + event.summary + '</div>' +
            //   '</div>');

            // $event.data( 'event', event );
            // $event.click( plugin.settings.onEventSelect );

            // // simplify further customization
            // plugin.settings.onEventCreate( $event );

            // container.append($event);
        })
        },
        //Small effect to fillup a container
        fillUp: function (x, y) {
        var plugin = this;
        var elem = $(plugin.element);
        var elemOffset = elem.offset();

        var filler = $('<div class="filler" style=""></div>');
        filler.css("left", x - elemOffset.left);
        filler.css("top", y - elemOffset.top);

        elem.find('.calendar').append(filler);

        filler.animate({
            width: "300%",
            height: "300%"
        }, 500, function () {
            elem.find('.event-container').show();
            filler.hide();
        });
        },
        //Small effect to empty a container
        empty: function (x, y) {
        var plugin = this;
        var elem = $(plugin.element);
        var elemOffset = elem.offset();

        var filler = elem.find('.filler');
        filler.css("width", "300%");
        filler.css("height", "300%");

        filler.show();

        elem.find('.event-container').hide().find('.event').remove();

        filler.animate({
            width: "0%",
            height: "0%"
        }, 500, function () {
            filler.remove();
        });
        },
        getDateEvents: function (d) {
        var plugin = this;
        return plugin.settings.events.filter(function (event) {
            return plugin.isDayBetween(d, new Date(event.startDate), new Date(event.endDate));
        });
        },
        isDayBetween: function (d, dStart, dEnd) {
        dStart.setHours(0,0,0);
        dEnd.setHours(23,59,59,999);
        d.setHours(12,0,0);

        return dStart <= d && d <= dEnd;
        },
        formatDateEvent: function (dateStart, dateEnd) {
        var formatted = '';
        formatted += this.settings.days[dateStart.getDay()] + ' - ' + dateStart.getDate() + ' ' + this.settings.months[dateStart.getMonth()].substring(0, 3);

        if (dateEnd.getDate() !== dateStart.getDate()) {
            formatted += ' to ' + dateEnd.getDate() + ' ' + this.settings.months[dateEnd.getMonth()].substring(0, 3)
        }
        return formatted;
        }
    });

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
        return this.each(function () {
        if (!$.data(this, "plugin_" + pluginName)) {
            $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
        });
    };

    // ------------customize----------------
    

    })(jQuery, window, document);





    $(document).ready(function () {
    $(".calendar-container").simpleCalendar({
        fixedStartDay: 0, // begin weeks by sunday
        disableEmptyDetails: true
    });
    });

    
}
