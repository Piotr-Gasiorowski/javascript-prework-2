let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

if(playerInput == '1'){
  playerMove = 'kamień';
}

printMessage('Twój ruch to: ' + playerMove);

else if(playerInput == '2'){
	playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

else if(playerInput == '3') {
	playerMove = 'papier';
}

printMessage('Twój ruch to: ' + playerMove);

else if(playerInput => '4') {
	playerMove = 'nieznany ruch';
}

printMessage('Nieznany ruch');

else if(playerMove == computerMove) {
	printMessage('!!! REMIS !!!')
}
	
if(computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
}else if(computerMove == 'nożyce' && playerMove == 'papier'){
  printMessage('Komputer wygrywa!');
}else if(computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
}else if(computerMove == 'kamień' && playerMove == 'nożyce'){
  printMessage('Komputer wygrywa!');
}else if(computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
}else if(computerMove == 'papier' && playerMove == 'kamień'){
  printMessage('Komputer wygrywa!');
}