function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    window.alert("Copied the text: " + $temp.val());
    $temp.remove();
}