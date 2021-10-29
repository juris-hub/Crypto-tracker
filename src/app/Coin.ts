export interface Sparkline {
  price: Array<number>;
}

export interface Coin {
    id:string;
    name: string;
    symbol: string;
    image : string;
    market_cap: number;
    current_price: number;
    total_volume: number;
    price_change_percentage_24h: number;
    price_change_percentage_7d_in_currency: number;
    sparkline_in_7d: Sparkline;
    ath_date: string;
  }
