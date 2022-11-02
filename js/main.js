window.addEventListener('DOMContentLoaded', function() {
	const options = {
    onOpen: modal => {
    },
    onClose: modal => {
    },
    disableScroll: true,
    transition: 250,
    nested: false,
    overlayCloseAll: true,
  }
  const modals = new SimpleModal()
  modals.init(options)

  const numberMask = IMask(document.querySelector('.main__input'), {
    mask: Number,
    min: 0,
    max: 10000000,
    thousandsSeparator: ' ',
  })
  
})