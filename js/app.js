const $shareBtn = document.querySelector('.share-button')
const $shareContainer = document.querySelector('.share-container')
const $closeShareBtn = document.querySelector('.close-share-btn')

$shareBtn.addEventListener('click', function() {
    $shareContainer.classList.toggle('hidden')
})

$closeShareBtn.addEventListener('click', function() {
    $shareContainer.classList.add('hidden')
})
