// Este ejemplo utiliza JavaScript para agregar una funcionalidad de interacción a la superposición de mezcla en función de la posición del mouse.

// Selecciona el elemento con la clase "overlay"
const overlay = document.querySelector('.overlay');

// Agrega un evento "mousemove" al documento
document.addEventListener('mousemove', (event) => {
  // Calcula la posición horizontal del puntero del mouse relativa al ancho de la ventana
  const x = event.clientX / window.innerWidth;
  
  // Calcula la posición vertical del puntero del mouse relativa al alto de la ventana
  const y = event.clientY / window.innerHeight;
  
  // Actualiza el color de fondo de la superposición en función de las coordenadas x e y
  overlay.style.backgroundColor = `rgba(${x * 255}, ${y * 255}, 0, 0.5)`;
});
