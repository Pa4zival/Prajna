GAME.Config = {
	input: {
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40,
		SHOOT: 90, /* Z */
		PAUSE: 32, /* spacebar */
		START: 13, /* enter */
		CHANGE: 67 /* C */
	},

	active: false,
	level: 0,
	moveInterval: 3,
	bulletSpeed: 4,
	bulletLimit: 5,
	enemyWidth: 12,
	enemyHeight: 5,
	pointsDiff: 100
};

GAME.Lang = [];
GAME.Lang['pl'] = { /* maybe later */ };
GAME.Lang['en'] = {
	pausedTitle: "Paused",
	pausedText: "<strong>Press SpaceBar </strong> and resume the game!<br />Return to the home page <a href=''>Home page</a>.",
	nextLevelTitle: "Next Level",
	nextLevelText: "Congratulations, you killed all Ravans<br /> To go further <strong>Press SpaceBar!</strong>",
	killedTitle: "Ram is dead",
	killedText: "Ravan defeated Ram in this battle<br />To play again <strong>Press SpaceBar!</strong>",
	unlockedTitle: "Ram!",
	unlockedText: "You unlocked another level <br />To play further <strong>Press SpaceBar!</strong> ",
	winTitle: "Congratulations!",
	winText: "Congratulations, You won!"
};
