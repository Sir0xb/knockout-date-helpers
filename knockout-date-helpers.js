define(["knockout", "moment"], function(ko, moment){
    ko.bindingHandlers.date = {
        update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
            var value = valueAccessor();
            var valueUnwrapped = ko.utils.unwrapObservable(value);
            var allBindings = allBindingsAccessor();
            // Date formats: http://momentjs.com/docs/#/displaying/format/
            var pattern = allBindings.format || 'YYYY-MM-DD HH:mm:SS';
            var output = "";
            if (valueUnwrapped !== null && valueUnwrapped !== undefined) {
                output = moment(new Date(valueUnwrapped)).format(pattern);
            }
            if ($(element).is("input") === true) {
                $(element).val(output);
            } else {
                $(element).text(output);
            }
        }
    };
});
