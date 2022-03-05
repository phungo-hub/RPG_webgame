let player;

function Player (health, mana, strength, agility, speed) {
    this.health = health,
    this.mana = mana,
    this.strength = strength,
    this.agility = agility,
    this.speed = speed
}

let PlayerMoves = {
    calcAttack: function() {
        let getArena = document.querySelector('.arena');
        let getPlayerHealth = document.querySelector('.player-health');
        let getEnemyHealth = document.querySelector('.enemy-health');

        let playerAttack = function() {
            let calcBasedamage;
            if (enemy.mana > 0) {
                calcBasedamage = enemy.strength * enemy.mana / 1000;
            } else {
                calcBasedamage = enemy.strength * enemy.agility / 1000;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBasedamage + offsetDamage; 
            // Number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }

        // Enemy attacks
        let enemyAttack = function() {
            let calcBasedamage;
            if (player.mana > 0) {
                calcBasedamage = player.strength * player.mana / 1000;
            } else {
                calcBasedamage = player.strength * player.agility / 1000;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBasedamage + offsetDamage; 
            // Number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }

        // if player.speed >= enemy.speed -> player attacks first
        if (player.speed >= enemy.speed) {
            let playerAttackValues = playerAttack();
            let playerDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - playerDamage;
            alert( 'You have hit ' + playerAttackValues[1] + ' times with ' + playerAttackValues[0]+
            ' damage');
            if (enemy.health <= 0) {
                getEnemyHealth.textContent = "Health: 0";
                getPlayerHealth.textContent = "Health: " + player.health;
                alert( "You won! Refresh the browser to play again.");
            } else {
                getEnemyHealth.textContent = "Health: " + enemy.health;
                // Enemy attacks!
                let enemyAttackValues = enemyAttack();
                let enemyDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - enemyDamage;
                alert( 'The enemy have hit ' + enemyAttackValues[1] + 
                ' times with ' + enemyAttackValues[0] + ' damage');
                if (player.health <= 0) {    
                    getPlayerHealth.textContent = "Health: 0";
                    getEnemyHealth.textContent = "Health: " + enemy.health;
                    alert( "You lost! Refresh the browser to play again.");
                } else {
                    getPlayerHealth.textContent = "Health: " + player.health;
                }
            }
        } else if (enemy.speed >= enemy.speed) {
            let enemyAttackValues = enemyAttack();
            let enemyDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - enemyDamage;
            alert( 'the enemy have hit ' + enemyAttackValues[1] + ' times with ' + enemyAttackValues[0]+
            ' damage');
            if (player.health <= 0) {
                getEnemyHealth.textContent = "Health: " + enemy.health;
                getPlayerHealth.textContent = "Health: 0";
                alert( "You lost! Refresh the browser to play again.");
            } else {
                getPlayerHealth.textContent = "Health: " + player.health;
                // Player attacks!!
                let playerAttackValues = playerAttack();
                let playerDamage = playerAttackValues[0] * playerAttackValues[1];
                enemy.health = enemy.health - playerDamage;
                alert( 'You have hit ' + playerAttackValues[1] + 
                ' times with ' + playerAttackValues[0] + ' damage');
                if (enemy.health <= 0) {    
                    getPlayerHealth.textContent = "Health: " + player.health;;
                    getEnemyHealth.textContent = "Health: 0";
                    alert( "You won! Refresh the browser to play again.");
                } else {
                    getEnemyHealth.textContent = "Health: " + enemy.health;
                }
            }
        }
    }
    
}