const request = new XMLHttpRequest;

request.open('GET','https://api.jsonbin.io/b/5e1aa891b236b871b3605dd6/1')
request.send()
body = document.querySelector('body')
body.innerHTML = request.addEventListener("load",()=>{
	if (request.status == 200) {
		let info = JSON.parse(request.response)

		for (var i = 0; i <= info['data'].length; i++) {
			let productItem = document.createElement('DIV');
			productItem.classList.add('products__grid-item');

			let productItemImg = document.createElement('IMG');
			productItemImg.classList.add('products__grid-item-img');
			productItemImg.setAttribute('src',info['data'][i]['image']);
			productItem.appendChild(productItemImg);

			let productItemDescription = document.createElement('P');
			productItemDescription.innerHTML = info['data'][i]['name'];
			productItemDescription.classList.add('products__grid-item-description');
			productItem.appendChild(productItemDescription);

			let productItemPrice = document.createElement('P');
			productItemPrice.innerHTML ="$ "+(info['data'][i]['price']/100);
			productItemPrice.classList.add('products__grid-item-price');
			productItem.appendChild(productItemPrice);

			if (info['data'][i]['best_seller']) {
				let bestSeller = document.createElement('P');
				bestSeller.classList.add('bestseller');
				productItem.appendChild(bestSeller);
			}
			
			modifyDocumentFrangment(productItem);		
		}

	}
})

console.log(documentFragment)


