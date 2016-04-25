define(["knockout", "moment"], function(ko, moment){
    function isValidDate(d) {
        if ( Object.prototype.toString.call(d) !== "[object Date]" ) {
            return false;
        }
        return !isNaN(d.getTime());
    }

    ko.bindingHandlers.date = {
        update: function (element, valueAccessor, allBindingsAccessor) {
            var value = valueAccessor();
            var valueUnwrapped = ko.utils.unwrapObservable(value);
            var allBindings = allBindingsAccessor();

            var pattern = allBindings.format || 'YYYY-MM-DD HH:mm:SS';

            var output = "";
            if (valueUnwrapped !== null && valueUnwrapped !== undefined && valueUnwrapped !== "") {
                var _date = new Date(valueUnwrapped);
                if (isValidDate(_date)) {
                    output = moment(_date).format(pattern);
                }
            }

            if (ko.isObservable(value)) {
                value(output);
            } else {
                element.value = output;
            }
        }
    };
});
