let puntaje = 0;
let areaActual = '';
let decisionActual = 0;
let decisiones = {
  ventas: [
    {
      texto: "Tu empresa está experimentando una caída en las ventas. Como gerente, debes decidir sobre la Estrategia de Precios.",
      opcionA: {
        texto: "Aumentar precios un 20%",
        impacto: 20,
        explicacion: "Podría aumentar márgenes, pero arriesga perder clientes si el precio se percibe como excesivo."
      },
      opcionB: {
        texto: "Mantener precios actuales",
        impacto: 10,
        explicacion: "Atrae más clientes, pero puede afectar márgenes si los costos siguen aumentando."
      }
    },
    {
      texto: "Para incentivar las ventas, te enfrentas a la decisión sobre promociones. Tu equipo de marketing sugiere estrategias agresivas.",
      opcionA: {
        texto: "Ofrecer un 50% de descuento",
        impacto: 10,
        explicacion: "Atrae rápidamente a muchos clientes, pero reduce ingresos y puede dañar la marca."
      },
      opcionB: {
        texto: "Promoción 2x1",
        impacto: 20,
        explicacion: "Atrae clientes sin sacrificar tanto el margen, pero recuerda controlar el tiempo de la promoción"
      }
    },
    {
      texto: "Observando el mercado, decides revisar tus Canales de Distribución. La competencia está aprovechando nuevas plataformas online.",
      opcionA: {
        texto: "Expandir a nuevos canales online",
        impacto: 10,
        explicacion: "Aumenta ventas y alcance, pero conlleva altos costos y riesgos logísticos."
      },
      opcionB: {
        texto: "Mejorar canales actuales",
        impacto: 20,
        explicacion: "Más seguro y económico, aunque puede limitar el crecimiento si el mercado está saturado."
      }
    },
    {
      texto: "Tu empresa está considerando su expansión en el mercado. La situación actual requiere una evaluación cuidadosa sobre el rumbo a seguir.",
      opcionA: {
        texto: "Expandirse a mercados internacionales",
        impacto: 20,
        explicacion: "Abre nuevas oportunidades, pero implica altos costos y desafíos culturales."
      },
      opcionB: {
        texto: "Expandirse a mercados locales cercanos",
        impacto: 10,
        explicacion: "Menos riesgo, pero oportunidades limitadas si el mercado está saturado."
      }
    },
    {
      texto: "Como parte de tu estrategia comercial, te enfrentas a la necesidad de ajustar los precios para seguir siendo competitivo.",
      opcionA: {
        texto: "Reducir precios para competir",
        impacto: 20,
        explicacion: "Atrae clientes rápidamente, pero reduce márgenes y podría afectar la marca."
      },
      opcionB: {
        texto: "Mantener precios premium",
        impacto: 10,
        explicacion: "Fortalece la marca, pero puede reducir ventas si la economía es débil."
      }
    }
  ],
  
  gerencia: [
    {
      texto: "Tu empresa está en un punto de inflexión y necesitas decidir sobre la contratación de personal. Esto impactará en la productividad y los costos operativos.",
      opcionA: {
        texto: "Contratar personal especializado",
        impacto: 20,
        explicacion: "Aumenta productividad, pero implica mayores costos salariales."
      },
      opcionB: {
        texto: "Capacitar al personal actual",
        impacto: 10,
        explicacion: "Más económico, pero requiere tiempo para ver resultados."
      }
    },
    {
      texto: "La eficiencia operativa es fundamental, y necesitas decidir sobre la inversión en tecnología para mejorar la gestión y productividad.",
      opcionA: {
        texto: "Invertir en software de gestión avanzado",
        impacto: 20,
        explicacion: "Mejora eficiencia, pero tiene altos costos iniciales."
      },
      opcionB: {
        texto: "Mantener el sistema actual",
        impacto: 10,
        explicacion: "Ahorra dinero a corto plazo, pero puede limitar la innovación."
      }
    },
    {
      texto: "En un entorno laboral cambiante, te enfrentas a la decisión sobre la estrategia de liderazgo para guiar a tu equipo.",
      opcionA: {
        texto: "Estilo de liderazgo autoritario",
        impacto: 20,
        explicacion: "Permite decisiones rápidas."
      },
      opcionB: {
        texto: "Estilo de liderazgo participativo",
        impacto: 10,
        explicacion: "Mejora moral y creatividad pero ralentiza decisiones."
      }
    },
    {
      texto: "Con la creciente preocupación por la sostenibilidad, necesitas decidir sobre la política que implementará tu empresa.",
      opcionA: {
        texto: "Implementar una política de sostenibilidad agresiva",
        impacto: 20,
        explicacion: "Atrae clientes conscientes, pero aumenta costos."
      },
      opcionB: {
        texto: "Implementar cambios graduales",
        impacto: 10,
        explicacion: "Controla costos, pero los cambios pueden ser lentos."
      }
    },
    {
      texto: "Tu empresa está evaluando su estructura organizativa y necesita decidir entre centralizar o descentralizar la toma de decisiones.",
      opcionA: {
        texto: "Centralizar la toma de decisiones",
        impacto: 20,
        explicacion: "Mejora control, pero puede desmotivar a gerentes locales."
      },
      opcionB: {
        texto: "Descentralizar la toma de decisiones",
        impacto: 10,
        explicacion: "Fomenta innovación, pero puede complicar la coherencia."
      }
    }
  ],
  
  produccion: [
    {
      texto: "Tu empresa está buscando mejorar la eficiencia en la producción y necesita decidir sobre la mejora de procesos.",
      opcionA: {
        texto: "Implementar automatización",
        impacto: 20,
        explicacion: "Aumenta eficiencia, bien!."
      },
      opcionB: {
        texto: "Mejorar procesos manuales",
        impacto: 10,
        explicacion: "Es más económico, pero menos efectivo a largo plazo."
      }
    },
    {
      texto: "La gestión de inventarios es crucial para tu operación. Te enfrentas a la decisión sobre los niveles de inventario.",
      opcionA: {
        texto: "Mantener altos niveles de inventario",
        impacto: 20,
        explicacion: "Asegura cumplimiento rápido, pero aumenta costos de almacenamiento."
      },
      opcionB: {
        texto: "Reducir inventario",
        impacto: 10,
        explicacion: "Ahorra costos, pero puede llevar a no cumplir la demanda."
      }
    },
    {
      texto: "Estás evaluando la expansión de capacidad de producción, y debes decidir sobre la mejor forma de hacerlo.",
      opcionA: {
        texto: "Abrir una nueva planta",
        impacto: 20,
        explicacion: "Aumenta capacidad, pero implica grandes gastos iniciales."
      },
      opcionB: {
        texto: "Ampliar la planta actual",
        impacto: 10,
        explicacion: "Más económico y rápido, pero limita producción adicional."
      }
    },
    {
      texto: "Tienes que decidir sobre el uso de materiales en tu proceso de producción, lo que impactará la calidad y los costos.",
      opcionA: {
        texto: "Usar materiales más baratos",
        impacto: 10,
        explicacion: "Reduce costos, pero afecta la calidad."
      },
      opcionB: {
        texto: "Usar materiales premium",
        impacto: 20,
        explicacion: "Mejora calidad, aunque aumenta costos de producción."
      }
    },
    {
      texto: "Debes decidir sobre el ritmo de producción, ya que esto impactará tu capacidad de respuesta al mercado.",
      opcionA: {
        texto: "Aumentar el ritmo de producción",
        impacto: 20,
        explicacion: "Satisface demanda, pero puede afectar calidad si no se gestiona bien."
      },
      opcionB: {
        texto: "Mantener el ritmo actual",
        impacto: 10,
        explicacion: "Ahorra en mantenimiento, pero limita capacidad de crecimiento."
      }
    }
  ],
  
  
  compras: [
    {
      texto: "Tu departamento de compras está evaluando proveedores para asegurar el suministro de materiales. Debes tomar una decisión estratégica.",
      opcionA: {
        texto: "Elegir al proveedor más barato",
        impacto: 10,
        explicacion: "Ahorra dinero, pero puede comprometer calidad."
      },
      opcionB: {
        texto: "Elegir al proveedor de mejor calidad",
        impacto: 20,
        explicacion: "Mejora la reputación, pero a un costo mayor."
      }
    },
    {
      texto: "Estás considerando el volumen de compra. Esto impactará tus costos y tu capital de trabajo.",
      opcionA: {
        texto: "Comprar en grandes cantidades",
        impacto: 20,
        explicacion: "Reduce costo por unidad, pero inmoviliza capital."
      },
      opcionB: {
        texto: "Comprar pequeñas cantidades",
        impacto: 10,
        explicacion: "Reduce inversión inicial, pero puede aumentar costos por unidad."
      }
    },
    {
      texto: "Decides sobre los contratos de suministro.",
      opcionA: {
        texto: "Firmar un contrato a largo plazo",
        impacto: 20,
        explicacion: "Asegura estabilidad, pero limita flexibilidad."
      },
      opcionB: {
        texto: "Negociar contratos cortos",
        impacto: 10,
        explicacion: "Mayor flexibilidad, pero puede llevar a precios fluctuantes."
      }
    },
    {
      texto: "Evalúas trabajar con proveedores internacionales.",
      opcionA: {
        texto: "Elegir proveedores internacionales más baratos",
        impacto: 20,
        explicacion: "Reduce costos, pero puede causar retrasos."
      },
      opcionB: {
        texto: "Elegir proveedores locales",
        impacto: 10,
        explicacion: "Asegura suministro rápido, aunque a mayor costo."
      }
    },
    {
      texto: "La diversificación de proveedores es un tema importante para tu estrategia de compras. Debes decidir cómo proceder.",
      opcionA: {
        texto: "Trabajar con un único proveedor",
        impacto: 20,
        explicacion: "Mejores descuentos, pero aumenta riesgo de dependencia."
      },
      opcionB: {
        texto: "Diversificar proveedores",
        impacto: 10,
        explicacion: "Minimiza riesgos, pero aumenta costos de gestión."
      }
    }
  ]
  
  
    
};

function seleccionarArea(area) {
  areaActual = area;
  decisionActual = 0;
  mostrarDecision();
  document.getElementById('menu').style.display = 'none';
  document.getElementById('decisiones').style.display = 'block';
}

function mostrarDecision() {
  let decision = decisiones[areaActual][decisionActual];
  document.getElementById('titulo-area').innerText = `Área de ${areaActual.charAt(0).toUpperCase() + areaActual.slice(1)}`;
  document.getElementById('decision-texto').innerText = decision.texto;
  document.getElementById('opcionA').innerText = decision.opcionA.texto;
  document.getElementById('opcionB').innerText = decision.opcionB.texto;
}

function tomarDecision(opcion) {
  let decision = decisiones[areaActual][decisionActual];
  let impacto = decision[opcion].impacto;
  let explicacion = decision[opcion].explicacion;

  puntaje += impacto;
  mostrarResultado(explicacion, impacto);
}

function mostrarResultado(explicacion, impacto) {
  document.getElementById('resultado-titulo').innerText = explicacion;
  document.getElementById('resultado-puntos').innerText = `Puntaje actual: ${puntaje}`;
  document.getElementById('modal').style.display = 'block';
}

function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
}

function continuar() {
  cerrarModal();
  decisionActual++;
  if (decisionActual < decisiones[areaActual].length) {
    mostrarDecision();
  } else {
    mostrarPuntajeFinal();
  }
}

function mostrarPuntajeFinal() {
  document.getElementById('decisiones').style.display = 'none';
  document.getElementById('final').style.display = 'block';
  document.getElementById('puntaje-final').innerText = `Tu puntaje es: ${puntaje}/100`;
}
