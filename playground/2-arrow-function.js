// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x
// console.log(square(5))

const event = {
    name: 'Birthday Party!',
    guestList: ["Tuan", "Cao", "Manh"],
    printGuestList() {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()