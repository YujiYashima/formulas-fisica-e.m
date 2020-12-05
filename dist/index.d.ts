export declare const print: (e: any) => void;
declare type unidadeVelocidade = "km/h" | "m/s";
export declare const apenasNumero: (valor: string) => number;
export declare const velocidadeEscalarMedia: (deslocamento: number, tempo: number, unidadeMedida: unidadeVelocidade) => string;
export declare const converterVelocidadeMedia: (velocidade: number, converterPara: unidadeVelocidade) => string;
export declare const funçaoHorariaDasPosicoes: (espaçoInicial: number, velocidade: number, tempo: number) => string;
export declare const velocidadeRelativaEncontro: (velocidadeA: number, velocidadeB: number, unidadeMedida: unidadeVelocidade) => string;
export declare const velocidadeRelativaPerseguiçao: (velocidadeA: number, velocidadeB: number, unidadeMedida: unidadeVelocidade) => string;
export declare const velocidadeRelativaAfastamento: (velocidadeA: number, velocidadeB: number, unidadeMedida: unidadeVelocidade) => string;
export declare const aceleraçaoMedia: (variacaoVelocidade: number, tempo: number) => string;
export declare const funçaoHorariaDaVelocidade: (velocidadeInicial: number, aceleraçao: number, tempo: number) => string;
export declare const funçaoHorariaDoEspaço: (espaçoInicial: number, velocidadeInicial: number, tempo: number, aceleraçao: number) => string;
export declare const velocidadeMediaMUV: (velocidadeA: number, velocidadeB: number, unidadeMedida: unidadeVelocidade, print?: "console" | undefined) => string;
export {};
