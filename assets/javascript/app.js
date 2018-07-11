var datetimeLocal = $('#date')
datetimeLocal.on('focus', function (event) {
    this.type = 'datetime-local';
    this.focus();
});