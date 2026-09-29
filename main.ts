hourOfAi.onStart(function () {
	
})
hourOfAi.onBumpWall(function () {
    hourOfAi.turnBy(105)
    hourOfAi.doAfter(1000, function () {
        hourOfAi.turnBy(90)
        hourOfAi.turnBy(randint(-180, 180))
    })
    hourOfAi.turnBy(75)
    hourOfAi.doAfter(500, function () {
        hourOfAi.turnBy(105)
        hourOfAi.turnTowards(105)
    })
})
