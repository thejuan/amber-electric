export interface E1 {
  dataAvailable: boolean;
  networkDailyPrice: string;
  basicMeterDailyPrice: string;
  additionalSmartMeterDailyPrice: string;
  amberDailyPrice: string;
  totalDailyPrice: string;
  networkKWHPrice: string;
  marketKWHPrice: string;
  greenKWHPrice: string;
  carbonNeutralKWHPrice: string;
  lossFactor: string;
  offsetKWHPrice: string;
  totalfixedKWHPrice: string;
  totalBlackPeakFixedKWHPrice: string;
  totalBlackShoulderFixedKWHPrice: string;
  totalBlackOffpeakFixedKWHPrice: string;
}

export interface E2 {
  dataAvailable: boolean;
  networkDailyPrice: string;
  basicMeterDailyPrice: string;
  additionalSmartMeterDailyPrice: string;
  amberDailyPrice: string;
  totalDailyPrice: string;
  networkKWHPrice: string;
  marketKWHPrice: string;
  greenKWHPrice: string;
  carbonNeutralKWHPrice: string;
  lossFactor: string;
  offsetKWHPrice: string;
  totalfixedKWHPrice: string;
  totalBlackPeakFixedKWHPrice: string;
  totalBlackShoulderFixedKWHPrice: string;
  totalBlackOffpeakFixedKWHPrice: string;
}

export interface B1 {
  dataAvailable: boolean;
  networkDailyPrice: string;
  basicMeterDailyPrice: string;
  additionalSmartMeterDailyPrice: string;
  amberDailyPrice: string;
  totalDailyPrice: string;
  networkKWHPrice: string;
  marketKWHPrice: string;
  greenKWHPrice: string;
  carbonNeutralKWHPrice: string;
  lossFactor: string;
  offsetKWHPrice: string;
  totalfixedKWHPrice: string;
  totalBlackPeakFixedKWHPrice: string;
  totalBlackShoulderFixedKWHPrice: string;
  totalBlackOffpeakFixedKWHPrice: string;
}

export interface E1TOU {
  dataAvailable: boolean;
  networkDailyPrice: string;
  basicMeterDailyPrice: string;
  additionalSmartMeterDailyPrice: string;
  amberDailyPrice: string;
  totalDailyPrice: string;
  networkPeakKWHPrice: string;
  networkShoulderKWHPrice: string;
  networkOffpeakKWHPrice: string;
  marketKWHPrice: string;
  greenKWHPrice: string;
  carbonNeutralKWHPrice: string;
  lossFactor: string;
  offsetKWHPrice: string;
  totalfixedKWHPrice: string;
  totalBlackPeakFixedKWHPrice: string;
  totalBlackShoulderFixedKWHPrice: string;
  totalBlackOffpeakFixedKWHPrice: string;
}

export interface StaticPrices {
  E1: E1;
  E2: E2;
  B1: B1;
  E1TOU: E1TOU;
}

export interface VariablePricesAndRenewable {
  periodType: string;
  semiScheduledGeneration: string;
  operationalDemand: string;
  rooftopSolar: any;
  createdAt: Date;
  wholesaleKWHPrice: string;
  region: string;
  period: Date;
  renewablesPercentage: string;
  periodSource: string;
  percentileRank: string;
  latestPeriod?: Date;
  usage: string;
  forecastedAt?: Date;
  "forecastedAt+period": string;
}

export interface PriceData {
  currentNEMtime: Date;
  postcode: string;
  networkProvider: string;
  staticPrices: StaticPrices;
  variablePricesAndRenewables: VariablePricesAndRenewable[];
}

export interface IPricesResponse {
  serviceResponseType: number;
  data: PriceData;
  message: string;
}
