function updateClock() {
  // Obtenha a data e hora atual
  const now = new Date();

  // Extraia horas, minutos e segundos
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Determina se é AM ou PM
  const period = hours >= 12 ? "PM" : "AM";

  // Converte o formato de 24h para 12h
  hours = hours % 12; // Ajusta horas maiores que 12
  hours = hours ? hours : 12; // Se for 0, transforma para 12

  // Formata minutos e segundos para sempre ter 2 dígitos
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  // Atualiza o conteúdo do relógio na página
  document.querySelector(".hours").textContent = hours;
  document.querySelector(".minutes").textContent = formattedMinutes;
  document.querySelector(".seconds").textContent = formattedSeconds;
  document.querySelector(".period").textContent = period;

  // Chama a função para mudar a cor do box-shadow
  changeBoxShadowColor();
}

// Função para gerar cores RGB aleatórias
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Função para gerar múltiplas sombras coloridas como um arco-íris
function changeBoxShadowColor() {
  const clockElement = document.querySelector(".clock");

  // Gera várias sombras com diferentes cores aleatórias
  const shadows = Array.from({ length: 5 }, () => {
    const color = getRandomColor();
    const offsetX = Math.floor(Math.random() * 10) - 5; // Offset aleatório para x
    const offsetY = Math.floor(Math.random() * 10) - 5; // Offset aleatório para y
    return `${offsetX}px ${offsetY}px 5px ${color}`; // Define sombra
  });

  // Aplica as sombras geradas ao elemento
  clockElement.style.boxShadow = shadows.join(", ");
}

// Atualiza o relógio e a cor do box-shadow a cada segundo
setInterval(updateClock, 1000);

// Executa a função ao carregar a página para exibir o relógio imediatamente
updateClock();
