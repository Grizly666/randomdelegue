const learners = [
	{
		name: 'Antoine Marie',
		img: './assets/img/antoine marie.png',
	},
	{
		name: 'Damien Bellec',
		img: './assets/img/bellec damien.png',
	},
	{
		name: 'Maxence Denquin',
		img: './assets/img/denquin maxence.png',
	},
	{
		name: 'Maxime Sauvage',
		img: './assets/img/sauvage maxime.png',
	},
	{
		name: 'Simon Libert',
		img: './assets/img/simon libert.png',
	},
	{
		name: 'Sébastien Colbert',
		img: './assets/img/colbert sebastien.png',
	},
	{
		name: 'Florent Merlin',
		img: './assets/img/merlin florent.png',
	},
	{
		name: 'Ludovic Truffier',
		img: './assets/img/truffier ludovic.png',
	},
	{
		name: 'Ludovic Fournier',
		img: './assets/img/fournier ludovic.png',
	},
	{
		name: 'Nelson Sanchez',
		img: './assets/img/img11.png',
	},
	{
		name: 'Sébastien Delansay',
		img: './assets/img/delansay sebastien.png',
	},
	{
		name: 'Maxence Podevin',
		img: './assets/img/podevin maxence.png',
	},
];

/* ---------- START || Allows you to define which learner should be taken into account in the selection || START ---------- */

const excludeLearner = [];
const listLearners = document.querySelector('.list-learner');

learners.forEach((learner, key) => {
	const button = document.createElement('button');
	button.setAttribute('class', 'btn-leaner');
	button.innerHTML = learner.name;

	button.addEventListener('click', () => {
		button.classList.toggle('btn-red');

		// Insert or remove learner from exclude list
		const index = excludeLearner.indexOf(key);
		index > -1 ? excludeLearner.splice(index, 1) : excludeLearner.push(key);
	});

	listLearners.appendChild(button);
});

/* ---------- END || Allows you to define which learner should be taken into account in the selection || END ---------- */

/**
 * Allows you to select a learner taking into account the list of exclusions
 *
 * @param {Number} firstLearner Index of the first learner selected by the program
 * @return {Number} Index of the learner selected by the program
 */
function randomKey(firstLearner) {
	let random = Math.floor(Math.random() * learners.length);
	while (excludeLearner.includes(random) || firstLearner === random) {
		random = Math.floor(Math.random() * learners.length);
	}

	return random;
}

/* ---------- START || Allows you to display two selected learners taking into account the exclusion list || START ---------- */

const learnerBlock = document.querySelector('.information');
const randomBtn = document.querySelector('.random-btn');

function learner() {
	learnerBlock.innerHTML = '';
	let firstLearner;
	for (let i = 0; i < 2; i++) {
		const key = randomKey(firstLearner);
		if (i === 0) firstLearner = key;

		const learner = learners[key];
		const html = `
		    <div class="apprenant">
		        <div class="img-container">
		            <img src="${learner.img}"/>
		        </div>

		        <div>
		            <h4>${learner.name}</h4>
		        </div>
		    </div>
		`;

		learnerBlock.insertAdjacentHTML('beforeend', html);
	}
}

/* ---------- END || Allows you to display two selected learners taking into account the exclusion list || END ---------- */

// RANDOM LEARNERS PREVIEW
randomBtn.addEventListener('click', learner);
