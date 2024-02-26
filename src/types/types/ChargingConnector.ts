import { ConnectorType } from './ConnectorType';

export type ChargingConnector = {
  id: number;
  type: ConnectorType;
  maxPower: number;
};
