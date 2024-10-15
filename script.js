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
      texto: "Para incentivar las ventas, consideras promociones.",
      opcionA: {
        texto: "Ofrecer un 50% de descuento",
        impacto: 20,
        explicacion: "Atrae rápidamente a muchos clientes, pero reduce ingresos y puede dañar la marca."
      },
      opcionB: {
        texto: "Promoción 2x1",
        impacto: 10,
        explicacion: "Atrae clientes sin sacrificar tanto el margen, pero el efecto puede ser menor que un descuento fuerte."
      }
    },
    {
      texto: "Decides revisar tus Canales de Distribución.",
      opcionA: {
        texto: "Expandir a nuevos canales online",
        impacto: 20,
        explicacion: "Aumenta ventas y alcance, pero conlleva altos costos y riesgos logísticos."
      },
      opcionB: {
        texto: "Mejorar canales actuales",
        impacto: 10,
        explicacion: "Más seguro y económico, pero limita el crecimiento si el mercado está saturado."
      }
    },
    {
      texto: "Consideras la expansión de mercado.",
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
      texto: "Necesitas ajustar los precios para seguir siendo competitivo.",
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
      texto: "Tu empresa necesita decidir sobre la contratación de personal.",
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
      texto: "Debes decidir sobre inversión en tecnología.",
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
      texto: "Te enfrentas a la decisión sobre el estilo de liderazgo.",
      opcionA: {
        texto: "Estilo de liderazgo autoritario",
        impacto: 10,
        explicacion: "Permite decisiones rápidas, pero puede desmotivar al personal."
      },
      opcionB: {
        texto: "Estilo de liderazgo participativo",
        impacto: 20,
        explicacion: "Mejora moral y creatividad, pero puede ralentizar decisiones."
      }
    },
    {
      texto: "Necesitas decidir sobre la política de sostenibilidad.",
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
      texto: "Decides entre centralizar o descentralizar la toma de decisiones.",
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
      texto: "Necesitas mejorar la eficiencia en la producción.",
      opcionA: {
        texto: "Implementar automatización",
        impacto: 20,
        explicacion: "Aumenta eficiencia, pero puede ser costosa y llevar tiempo."
      },
      opcionB: {
        texto: "Mejorar procesos manuales",
        impacto: 10,
        explicacion: "Es más económico, pero menos efectivo a largo plazo."
      }
    },
    {
      texto: "Decides sobre los niveles de inventario.",
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
      texto: "Evalúas la expansión de capacidad de producción.",
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
      texto: "Debes decidir sobre el uso de materiales.",
      opcionA: {
        texto: "Usar materiales más baratos",
        impacto: 20,
        explicacion: "Reduce costos, pero puede afectar calidad."
      },
      opcionB: {
        texto: "Usar materiales premium",
        impacto: 10,
        explicacion: "Mejora calidad, pero aumenta costos de producción."
      }
    },
    {
      texto: "Decides sobre el ritmo de producción.",
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
      texto: "Evalúas proveedores para asegurar suministro de materiales.",
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
      texto: "Consideras el volumen de compra.",
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
      texto: "Consideras la diversificación de proveedores.",
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
  document.getElementById('puntaje-final').innerText = `Tu puntaje final es: ${puntaje}/100`;
}
