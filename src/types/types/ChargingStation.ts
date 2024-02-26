import { ChargingConnector } from './ChargingConnector';

export type CharginStation = {
  id: number;
  title: string;
  description: string;
  address: string;
  coordinates: string;
  public: boolean;
  chargeConnectors: ChargingConnector[];
};
