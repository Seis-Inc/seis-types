import { ListOptions } from "../common/ListOptions";
import { Page } from "../common/Page";
import { FederalPrimeInterestRate } from "./FederalPrimeInterestRate";

export type FederalPrimeInterestRateFilter = {
    primeRateDate?: string;
    orderBy?: 'ASC' | 'DESC';
} & ListOptions;

export type FederalPrimeInterestRatePage = Page<FederalPrimeInterestRate>;

