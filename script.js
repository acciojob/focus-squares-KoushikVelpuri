//your JS code here. If required.
const boxes = document.querySelectorAll('.square')
boxes.forEach((square)=>{
	square.addEventListener('mouseover',()=>{
		console.log(e.target.id)
		changeColor(e.target.id)
	})
	square.addEventListener('mouseout',()=>{
		boxes.forEach((square)=>{
			square.style.backgroundColor = `#E6E6FA`
		})
	})
})
function changeColor(hoveredBoxId){
	boxes.forEach((square)=>{
		if(square.id != hoveredBoxId){
			square.style.backgroundColor = `#6F4E37`
		}
	})
}
