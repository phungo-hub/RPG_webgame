let GameManager = {
    setGameStart: function(classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    }, 
    resetPlayer: function(classType) {
        switch (classType) {
            case 'Warrior':
                player = new Player(200,0,200,100,50)
                break;
            case 'Rogue':
                player = new Player(100,0,100,150,200)
                break;
            case 'Mage':
                player = new Player(80,0,50,200,50)
                break;
            case 'Hunter':
                player = new Player(200,0,50,200,100)
                break;       
        }
        let getInterface = document.querySelector('.interface')
        
        getInterface.innerHTML = '<img src="img/avatar-player/' + classType.toLowerCase() +'.png">' +
        '<div><h3>'+ classType+'</h3><p class="player-health">Health: '+ player.health+'</p><p>Mana: '+ 
        player.mana +'</p><p>Strength: '+ player.strength+'</p><p>Agility: '+ player.agility +
        '</p><p>Speed: '+ player.speed +'</p></div>'
    },
    setPreFight: function() {
        let getHeader = document.querySelector('.header');
        let getActions = document.querySelector('.actions');
        let getArena = document.querySelector('.arena');
        

        getHeader.textContent = "Find your enemy";
        getActions.innerHTML = '<button class="prefight-btn" onclick="GameManager.setFight()">Find enemy</button>'
        getArena.style.visibility = 'visible';
    },
    setFight: function() {
        let getEnemy = document.querySelector('.enemy');
        let getActions = document.querySelector('.actions');
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
        let getHeader = document.querySelector('.header');


        // create Enemy!
        switch (chooseRandomEnemy) {
            case 0: 
                enemy = new Enemy('Dragon',150,0,150,80,150);
                break;
            case 1:
                enemy = new Enemy('Kennen',100,0,50,100,100);
                break;
        }
        getHeader.textContent = 'choose your move'
        getActions.innerHTML ='<button class="setfight-btn" onclick="PlayerMoves.calcAttack()">Attack!</button>';
        getEnemy.innerHTML = '<img src="img/avatar-enemy/'+ enemy.enemyType.toLowerCase() + '.png">' +
        '<div><h3>'+enemy.enemyType+'</h3><p class="enemy-health">Health: '+ enemy.health +
        '</p><p>Mana: '+ enemy.mana+'</p><p>Strength: '+ enemy.strength+'</p><p>Agility: '+ enemy.agility +
        '</p><p>Speed: '+ enemy.speed +'</p></div>';
    }
}