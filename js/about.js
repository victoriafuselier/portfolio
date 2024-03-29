const educationButton = document.querySelector('#education-button');
const skillsButton = document.querySelector('#skills-button');
const popUpDiv = document.querySelector('#pop-up-div');
const main = document.querySelector('main');

educationButton.addEventListener('click', () => {
    if (popUpDiv.classList.contains('hidden')) {
        popUpDiv.classList.remove('hidden');
    }

    popUpDiv.style.display = 'block';
    popUpDiv.style.height = '100%';
    popUpDiv.style.width = '100%';
    
    popUpDiv.innerHTML = `<div id='pop-up-box'>
                            <button class="close">x</button>
                            <h2>Education</h2>
                            <ul id="education">
                                <li>Bachelor's Degree, Louisiana State University</li>
                                <li>FreeCodeCamp</li>
                                <li>Front-End Web Development Track, Treehouse</li>
                                <li>Front-End Web Development Techdegree, Treehouse</li>
                            </ul>
                        </div>`;

    let closeButton = document.querySelector('.close');
    closeButton.focus();
});

skillsButton.addEventListener('click', () => {
    if (popUpDiv.classList.contains('hidden')) {
        popUpDiv.classList.remove('hidden');
    }

    popUpDiv.style.display = 'block';
    popUpDiv.style.height = '100%';
    popUpDiv.style.width = '100%';
    
    popUpDiv.innerHTML =    `<div id="pop-up-box">
                                <button class="close">x</button>
                                <h2>Skills</h2>
                                <div id="pop-up-content">
                                    <div id="pop-up-list">
                                        <ul id="skills">
                                            <li>HTML</li>
                                            <li>CSS</li>
                                                <ul class="sublist">
                                                    <li>Grid</li>
                                                    <li>Flexbox</li>
                                                    <li>Transforms and Transitions</li>
                                                    <li>Keyframe Animations</li>
                                                    <li>Sass</li>
                                                    <ul>
                                                        <li class="sublist-level-2">and more!</li>
                                                    </ul>                            
                                                </ul>
                                            <li>JavaScript</li>
                                                <ul class="sublist">
                                                    <li>DOM Selectors</li>
                                                    <li>DOM Manipulation</li>
                                                    <li>DOM Traversal</li>
                                                    <li>Callback functions</li>
                                                    <li>Array Methods</li>
                                                    <li>Array Iteration Methods</li>
                                                    <li>Object-Oriented JavaScript</li>
                                                    <li>Object Interactions</li>
                                                    <li>Callback Functions</li>
                                                    <li>Fetch API</li>
                                                        <ul>
                                                            <li class="sublist-level-2">and more!</li>
                                                        </ul>
                                                </ul>
                                            <li>Responsive Design</li>
                                            <li>Bootstrap</li>
                                            <li>Github</li>
                                            <li>SVG Basics</li>
                                            <li>JQuery</li>
                                            <li>AJAX Basics</li>
                                            <li>Debugging with Chrome DevTools</li>
                                            <li>Web Design</li>
                                            <li>Accessibility</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>`;

    let closeButton = document.querySelector('.close');
    closeButton.focus();                            
});


popUpDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('close')) {
        popUpDiv.classList.add('hidden');
        popUpDiv.innerHTML = ``;
        popUpDiv.style.height = '0px';
    }
});

popUpDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('pop-up-div')) {
        popUpDiv.classList.add('hidden');
        popUpDiv.innerHTML = ``;
        popUpDiv.style.height = '0px';
    }
});
