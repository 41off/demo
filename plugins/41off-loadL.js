  (function localFileVideoPlayer() {
	        'use strict'
             var URL = window.URL || window.webkitURL
             var displayMessage = function (message, isError) {
             var element = document.querySelector('#message')
                 element.innerHTML = message.fontcolor("red")
                 element.className = isError ? 'error' : 'info'
                 element.style.fontSize = "12pt"
                 element.style.fontWeight = "bold"          
            }
             var playSelectedFile = function (event) {
             var file = this.files[0]
             var type = file.type
             var videoNode = document.querySelector('video')
             var canPlay = videoNode.canPlayType(type)
             if (canPlay === '') canPlay = 'No'
             var message = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Can play type "'+ type +'": Yes '
             var isError = canPlay === 'No: .mp4/.webm video files only'
                 
             
    displayMessage(message, isError)

    if (isError) {
      return
    }

    var fileURL = URL.createObjectURL(file)
    videoNode.src = fileURL
  }
  var inputNode = document.querySelector('input')
  inputNode.addEventListener('change', playSelectedFile, false)
})()

