(() => {
  'use strict';

  if (typeof capacitaciones === 'undefined' || !Array.isArray(capacitaciones)) return;

  const sesion = capacitaciones.find(item => item.fecha === 'Viernes 17 de julio');
  if (!sesion || !sesion.recursos) return;

  sesion.recursos.video = 'https://drive.google.com/file/d/1cNgYn7TZ6nb4z_ZWcD_xk1v7LyenRk17/preview';
  sesion.recursos.videoDrive = 'https://drive.google.com/file/d/1cNgYn7TZ6nb4z_ZWcD_xk1v7LyenRk17/view?usp=sharing';

  if (typeof renderizarCapacitaciones === 'function') {
    renderizarCapacitaciones(capacitaciones);
  }
})();
