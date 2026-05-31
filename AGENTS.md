# AGENTS

Guia para agentes de programacion que trabajan en este repositorio.

## Mision
- Mantener este proyecto como un ejemplo pequeno y didactico de React + TypeScript para un bingo social presencial.
- Priorizar cambios simples y legibles que apoyen el flujo de aprendizaje del workshop.

## Inicio Rapido
- Requisito previo: Node.js 22+
- Instalar: npm install
- Servidor dev: npm run dev
- Lint: npm run lint
- Pruebas: npm run test
- Build: npm run build

## Mapa del Proyecto
- Entrada de la app y cambio de pantallas: [src/App.tsx](src/App.tsx)
- Orquestacion del estado del juego y persistencia: [src/hooks/useBingoGame.ts](src/hooks/useBingoGame.ts)
- Reglas puras de bingo y generacion del tablero: [src/utils/bingoLogic.ts](src/utils/bingoLogic.ts)
- Pruebas de logica (red de seguridad principal): [src/utils/bingoLogic.test.ts](src/utils/bingoLogic.test.ts)
- Banco de preguntas y texto de casilla libre: [src/data/questions.ts](src/data/questions.ts)
- Componentes UI: [src/components/](src/components/)
- Tipos: [src/types/index.ts](src/types/index.ts)

## Limites de Arquitectura
- Mantener las reglas del juego en utilidades y transformaciones de datos, no en componentes de presentacion.
- Mantener las transiciones de estado de React en [src/hooks/useBingoGame.ts](src/hooks/useBingoGame.ts).
- Preferir extender tipos existentes en [src/types/index.ts](src/types/index.ts) en lugar de usar shapes ad-hoc.
- Si cambias logica de tablero o de victoria, actualiza/agrega pruebas primero en [src/utils/bingoLogic.test.ts](src/utils/bingoLogic.test.ts).

## Comportamiento y Riesgos
- El tablero es 5x5 con casilla libre central en el indice 12; conserva esto salvo que cambien explicitamente las reglas del juego.
- El estado persistido en localStorage usa la clave bingo-game-state y validacion versionada en [src/hooks/useBingoGame.ts](src/hooks/useBingoGame.ts).
- Evita romper la restauracion de estado (almacenamiento invalido o antiguo debe descartarse de forma segura).

## Personalizaciones de Agente Existentes
- Instruccion de diseno frontend: [.github/instructions/frontend-design.instructions.md](.github/instructions/frontend-design.instructions.md)
- Instruccion Tailwind v4: [.github/instructions/tailwind-4.instructions.md](.github/instructions/tailwind-4.instructions.md)
- Prompt de setup: [.github/prompts/setup.prompt.md](.github/prompts/setup.prompt.md)
- Prompt de exploracion cloud: [.github/prompts/cloud-explore.prompt.md](.github/prompts/cloud-explore.prompt.md)
- Agentes especializados: [.github/agents/](.github/agents/)

## Documentacion de Referencia
- Guia principal: [README.md](README.md)
- Indice del workshop: [workshop/GUIDE.md](workshop/GUIDE.md)
- Politica de contribucion: [CONTRIBUTING.md](CONTRIBUTING.md)
- Assets del sitio de documentacion estatico: [docs/](docs/)

## Estilo de Cambios
- Haz cambios enfocados y ejecuta lint + pruebas antes de finalizar.
- No agregues nuevas dependencias salvo que el usuario lo pida.
- Para trabajo de UI, sigue las instrucciones de frontend y Tailwind anteriores en lugar de redefinir la politica de diseno aqui.
