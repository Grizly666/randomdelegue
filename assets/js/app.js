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

const listLearners = document.querySelector('.list-learner');
learners.forEach((learner) => {
	const button = document.createElement('button');
	button.setAttribute('class', 'btn-leaner');
	button.innerHTML = learner.name;

	button.addEventListener('click', () => {
		button.classList.toggle('btn-red');
	});

	listLearners.appendChild(button);
});

const learnerBlock = document.querySelector('.information');
const randomBtn = document.querySelector('.random-btn');

function learner() {
	learnerBlock.innerHTML = '';
	for (let i = 0; i < 2; i++) {
		const learner = learners[Math.floor(Math.random() * learners.length)];
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

//DEFAULT REVIEW DISPLAY WHEN WINDOW LOADS
window.addEventListener('DOMContentLoaded', learner);

//RANDOM PERSON PREVIEW
randomBtn.addEventListener('click', learner);
