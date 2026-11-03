//your JS code here. If required.
const boxes = document.querySelectorAll('.square')
boxes.forEach((box)=>{
	box.addEventListener('mouseover',()=>{
		console.log(e.target.id)
		changeColor(e.target.id)
	})
	box.addEventListener('mouseout',()=>{
		boxes.forEach((box)=>{
			box.style.backgroundColor = `#E6E6FA`
		})
	})
})
function changeColor(hoveredBoxId){
	boxes.forEach((box)=>{
		if(box.id != hoveredBoxId){
			box.style.backgroundColor = `#6F4E37`
		}
	})
}
