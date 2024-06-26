const CharactersList = document.querySelectorAll('.character')

CharactersList.forEach(character => {
    character.addEventListener('mouseenter', () => {

        const selectedId = character.attributes.id.value

        if (selectedId === "darkseid") return;

        const selectedCharacter = document.querySelector('.selected')
        selectedCharacter.classList.remove('selected')

        character.classList.add('selected')

        const bigCharacter1Image = document.getElementById('player-1-character')
        bigCharacter1Image.src = `src/images/${selectedId}.png`


        const characterOneName = document.getElementById('character-1-name')
        const bigCharacterName = character.getAttribute('data-name')
        characterOneName.innerHTML = `${bigCharacterName}`
    })


})