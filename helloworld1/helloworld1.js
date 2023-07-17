function createRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  function generaNumero() {
    const numeroCasuale = createRandomNumber(1, 100);
    document.getElementById('numeroCasuale').textContent = 'Numero casuale: ' + numeroCasuale;
  }
  
  function generaNumeroGiocatore1() {
    const numeroCasuale = createRandomNumber(1, 100);
    document.getElementById('numeroGiocatore1').textContent = 'Numero casuale per il giocatore 1: ' + numeroCasuale;
  }

  function generaNumeroGiocatore2() {
    const numeroCasuale = createRandomNumber(1, 100);
    document.getElementById('numeroGiocatore2').textContent = 'Numero casuale per il giocatore 2: ' + numeroCasuale;
  }
    
  const numeroCasuale = createRandomNumber(1, 100);
  
  const giocatore1 = 50;
  const giocatore2 = 75;
  