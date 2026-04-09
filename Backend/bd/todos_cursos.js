const todos_cursos = [
  {
    nombre: "Bachillerato Tecnológico en Informática",
    tipo: "Informática",
    duracion: 3,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwFkTSlouG_1e-Mi7voOhyqybLj8dd3DfPlw&s",
    informacion: [
      "Formación integral en tecnologías de la información",
      "Preparación para el mundo laboral tecnológico",
      "Certificación oficial al finalizar"
    ],
    materias: [
      "Programación en Java",
      "Bases de Datos SQL",
      "Redes y Comunicaciones",
      "Sistemas Operativos",
      "Desarrollo Web",
      "Matemáticas Aplicadas"
    ]
  },
  {
    nombre: "Bachillerato Tecnológico en Electrónica",
    tipo: "Electrónica",
    duracion: 3,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwFkTSlouG_1e-Mi7voOhyqybLj8dd3DfPlw&s",
    informacion: [
      "Especialización en circuitos electrónicos",
      "Robótica y automatización",
      "Mantenimiento de equipos electrónicos"
    ],
    materias: [
      "Circuitos Eléctricos",
      "Electrónica Digital",
      "Microcontroladores",
      "Robótica",
      "Sensores y Actuadores",
      "Dibujo Técnico"
    ]
  },
  {
    nombre: "Bachillerato Tecnológico en Mecánica Automotriz",
    tipo: "Mecánica",
    duracion: 3,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwFkTSlouG_1e-Mi7voOhyqybLj8dd3DfPlw&s",
    informacion: [
      "Diagnóstico y reparación de vehículos",
      "Sistemas mecánicos y electrónicos automotrices",
      "Mantenimiento preventivo y correctivo"
    ],
    materias: [
      "Motores de Combustión Interna",
      "Sistemas de Transmisión",
      "Sistemas Eléctricos Automotrices",
      "Suspensión y Dirección",
      "Diagnóstico por Computadora",
      "Seguridad Automotriz"
    ]
  },
  {
    nombre: "Bachillerato Tecnológico en Diseño Gráfico",
    tipo: "Diseño",
    duracion: 3,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwFkTSlouG_1e-Mi7voOhyqybLj8dd3DfPlw&s",
    informacion: [
      "Formación en diseño digital y publicitario",
      "Herramientas profesionales de diseño",
      "Portafolio profesional al egresar"
    ],
    materias: [
      "Fundamentos del Diseño",
      "Photoshop Avanzado",
      "Illustrator",
      "Diseño Web",
      "Animación Digital",
      "Marketing Visual"
    ]
  },
  {
    nombre: "Bachillerato Tecnológico en Administración",
    tipo: "Administración",
    duracion: 3,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwFkTSlouG_1e-Mi7voOhyqybLj8dd3DfPlw&s",
    informacion: [
      "Gestión empresarial y administrativa",
      "Emprendimiento y liderazgo",
      "Prácticas en empresas reales"
    ],
    materias: [
      "Contabilidad General",
      "Administración de Empresas",
      "Recursos Humanos",
      "Marketing",
      "Finanzas Corporativas",
      "Legislación Laboral"
    ]
  },
  {
    nombre: "Bachillerato Tecnológico en Construcción",
    tipo: "Construcción",
    duracion: 3,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwFkTSlouG_1e-Mi7voOhyqybLj8dd3DfPlw&s",
    informacion: [
      "Formación en técnicas constructivas",
      "Supervisión de obras",
      "Diseño y planificación de proyectos"
    ],
    materias: [
      "Materiales de Construcción",
      "Topografía",
      "Instalaciones Eléctricas",
      "Instalaciones Hidrosanitarias",
      "Presupuestos de Obra",
      "Seguridad en la Construcción"
    ]
  },
  {
    nombre: "Bachillerato Tecnológico en Gastronomía",
    tipo: "Gastronomía",
    duracion: 3,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwFkTSlouG_1e-Mi7voOhyqybLj8dd3DfPlw&s",
    informacion: [
      "Formación en artes culinarias",
      "Gestión de restaurantes",
      "Cocina nacional e internacional"
    ],
    materias: [
      "Técnicas Culinarias",
      "Repostería Profesional",
      "Nutrición",
      "Seguridad Alimentaria",
      "Administración de Restaurantes",
      "Cocina Mexicana e Internacional"
    ]
  },
  {
    nombre: "Bachillerato Tecnológico en Logística",
    tipo: "Logística",
    duracion: 3,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwFkTSlouG_1e-Mi7voOhyqybLj8dd3DfPlw&s",
    informacion: [
      "Cadena de suministro y distribución",
      "Gestión de inventarios",
      "Comercio exterior y aduanas"
    ],
    materias: [
      "Gestión de Inventarios",
      "Transporte y Distribución",
      "Comercio Internacional",
      "Almacenes y Centros de Distribución",
      "Tecnología en Logística",
      "Planificación de la Demanda"
    ]
  }
];

// Si quieres un array específico de solo informática y programación:
const cursosInformatica = [
  {
    nombre: "Bachillerato Tecnológico en Informática",
    tipo: "Informática",
    duracion: 3,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwFkTSlouG_1e-Mi7voOhyqybLj8dd3DfPlw&s",
    informacion: [
      "Formación integral en tecnologías de la información",
      "Preparación para certificaciones internacionales"
    ],
    materias: [
      "Programación en Python",
      "Bases de Datos",
      "Desarrollo Web Full Stack",
      "Redes de Computadoras",
      "Sistemas Operativos",
      "Seguridad Informática"
    ]
  },
  {
    nombre: "Bachillerato Tecnológico en Desarrollo de Software",
    tipo: "Informática",
    duracion: 3,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwFkTSlouG_1e-Mi7voOhyqybLj8dd3DfPlw&s",
    informacion: [
      "Especialización en creación de aplicaciones",
      "Metodologías ágiles de desarrollo"
    ],
    materias: [
      "Programación Orientada a Objetos",
      "Desarrollo Mobile",
      "Arquitectura de Software",
      "Pruebas y Calidad de Software",
      "DevOps",
      "Cloud Computing"
    ]
  }
]


export { 
    todos_cursos
}

