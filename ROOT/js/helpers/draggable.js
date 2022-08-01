const container =  document.querySelectorAll(".board__column");

const sortable = new Sortable.default(container, {
    draggable: "div"
})

