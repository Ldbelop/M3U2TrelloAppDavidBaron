const container =  document.querySelectorAll(".board__column");

const draggable = new Sortable.default(container, {
    draggable: "div"
})
