//your JS code here. If required.
const boxes = document.querySelectorAll('.square')
boxes.forEach((box)=>{
	box.addEventListener('mouseover',()=>{
		changeColor(e.target.id)
	})
})
function changeColor(hoveredBoxId){
	boxes.forEach((box)=>{
		if(box.id != hoveredBoxId){
			box.style.backgroundColor = `#6F4E37`
		}
	})
}
