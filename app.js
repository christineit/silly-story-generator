// Complete variables and function definition
let customName = document.getElementById('customname');
let randomize = document.querySelector('.randomize');
let story = document.querySelector('.story');

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

var storyText = 'It was 94 fahrenheit outside, so' + xItem + 'went for a walk. When they got to' + yItem + ', they stared in horror for a few moments, then' + zItem + '. Bob saw the whole thing, but was not surprised — ' + xItem + 'weighs 300 pounds, and it was a hot day.'

// Raw text strings
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];


// Event Listener
randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    var xItem = randomValueFromArray(insertX).replace(xItem, insertX);
    var yItem = randomValueFromArray(insertY).replace(yItem, insertY);
    var zItem = randomValueFromArray(insertZ).replace(zItem, insertZ);

    if (customName.value !== '') {
        var name = customName.value;
        var newName = storyText.replace('Bob', name)

    }

    if (document.getElementById("uk").checked) {
        var weight = (Math.round(300 * 0.071429) + ' stone');
        var temperature = (Math.round((94 - 32) * (5 / 9)) + ' centigrade');
        var newWeight = storyText.replace('300 pounds', weight);
        var newTemp = storyText.replace('94 fahrenheit', temperature)
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}