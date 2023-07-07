document.addEventListener('change', function() {
    var chk = event.target
    if (chk.tagName === 'INPUT' && chk.type === 'checkbox') {
        console.log(chk.checked)
    }
})