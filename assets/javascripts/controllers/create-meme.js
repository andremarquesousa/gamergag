gamerGag.controller('CreateMemeCtrl', function($scope){
    var canvas = function() {
		var canvas = document.querySelector('.canvas'),
			context = canvas.getContext('2d'),
			image,
			topText = '',
			bottomText = '',
			fontSize;

		canvas.width = canvas.width;
		canvas.height = canvas.height;
		canvas.style.width = canvas.width;
		canvas.style.height = canvas.height;

		var draw = {
			getImage: function(elem) {
				var reader = new FileReader();

			    reader.onload = function(event){
			        image = new Image();

			        image.onload = function(){
			            context.drawImage(image,0,0);
			        }

			        image.src = event.target.result;
			    }

			    reader.readAsDataURL(elem.target.files[0]);
			},
			getText: {
				range: function(elem) {
					fontSize = elem.value;
					context.font = fontSize + 'px Impact';
				},
				write: function(elem) {
					var element = elem;

					if (image) {
						context.drawImage(image,0,0);
					} else {
						context.clearRect(0, 0, canvas.width, canvas.height);
					}


					fontSize = document.querySelector('input[type="range"]').value;
					context.font = fontSize + 'px Impact';
					context.textAlign = 'center';
					context.strokeStyle = 'black';
					context.lineWidth = 3;
					context.fillStyle = 'white';

					if (element.classList.contains('top')) {
						topText = element.value;
					}

					if (element.classList.contains('bottom')) {
						bottomText = element.value;
					}

					context.fillText(topText, canvas.width / 2, 40);
					context.strokeText(topText, canvas.width / 2, 40);

					context.fillText(bottomText, canvas.width / 2, canvas.height - 40);
					context.strokeText(bottomText, canvas.width / 2, canvas.height - 40);
				}
			}
		}

		var save = {
			image: function(elem) {
				elem.href = canvas.toDataURL('image/jpg');
			}
		}

		/*EVENTS*/
		document.querySelector('input[type="file"]').addEventListener('change', function(elem) {
			draw.getImage(elem);
		})

		document.querySelector('input[type="range"]').addEventListener('change', function(elem) {
			draw.getText.range(elem.target);
		})

		document.querySelectorAll('input[type="text"]').forEach(function(el, index, array){
			el.addEventListener('keyup', function(elem) {
				draw.getText.write(elem.target);
			})
		});

		document.querySelector('.save').addEventListener('click', function(elem) {
			save.image(elem.target);
		})
	}

	canvas();
});
