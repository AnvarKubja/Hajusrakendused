const minuJson = [
    {
        Car: {
            Colour: "Roosi roosa",
            "Tinted Windows": false,
            Seats: 4,
            Wheels: 4,
            Trunk_capacity: 200,
            Extras: {
                "Sunroof": true,
                "Heated_seats": true,
                "Heated_mirrors": true,
            },
            Brand: "BMW"
        }
    }
]

document.getElementById("app").innerHTML = `
<div id="json">
  <h1> Auto omadused </h1>
  <p>Värv: ${minuJson[0].Car.Colour}</p>
  <p>Tumendatud aknad: ${minuJson[0].Car["Tinted Windows"] ? 'Jah' : 'Ei'}</p>
  <p>Istekohti: ${minuJson[0].Car.Seats}</p>
  <p>Rattaid: ${minuJson[0].Car.Wheels}</p>
  <p>Pagasiruumi maht: ${minuJson[0].Car.Trunk_capacity}L</p>
  <p>Lisad:</p>
  <ul>
    <li>Katuseluuk: ${minuJson[0].Car.Extras.Sunroof ? 'Jah' : 'Ei'}</li>
    <li>Istmesoojendus: ${minuJson[0].Car.Extras.Heated_seats ? 'Jah' : 'Ei'}</li>
    <li>Peeglisoojendus: ${minuJson[0].Car.Extras.Heated_mirrors ? 'Jah' : 'Ei'}</li>
  </ul>
  <p>Mark: ${minuJson[0].Car.Brand}</p>
</div>
`