// CLOSEST
!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function() {
    const modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay      = document.querySelector('#overlay-modal'),
        closeButtons = document.querySelectorAll('.js-modal-close'),
        scroll=document.querySelector('#scroll');

    modalButtons.forEach(function(item){

        item.addEventListener('click', function(e) {

            e.preventDefault();
            const modalId = this.getAttribute('data-modal'),
                modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

            modalElem.classList.add('active');
            overlay.classList.add('active');
        }); // end click
    }); // end foreach
    closeButtons.forEach(function(item){
        item.addEventListener('click', function(e) {
            var parentModal = this.closest('.modal');
            parentModal.classList.remove('active');
            overlay.classList.remove('active');
        });
    }); // end foreach
    scroll.addEventListener('click',function (e) {
        e.preventDefault();
        console.log(document.querySelector('#scrollTo').value);
        document.querySelector('#scrollTo').scrollIntoView({behavior: "smooth"});
    })
}); // end ready



