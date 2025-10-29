/**
 * Options for the useGeoLocation hook.
 */
export interface GeoLocationOptions {
  /** An optional initial country code to bypass the API call. */
  country?: string;
  /** The optional API endpoint URL to use for fetching geolocation.
   * @default 'https://api.country.is'
   */
  api?: string;
}

/**
 * The result object returned by the useGeoLocation hook
 */
export interface GeoLocationResult {
  /** The two-letter country code (e.g., 'US'). Undefined while loading or if an error occurs. */
  country?: string;
  /** Contains an Error object if the API call failed; otherwise, false. */
  error: Error | false;
  /** True if the location data is currently being fetched; otherwise, false. */
  isLoading: boolean;
}

/**
 * A thin wrapper around the wonderful Country.is that gets your users' country (and nothing else) from their IP.
 * @see https://country.is
 * @param options Options for the useGeoLocation hook.
 */
declare function useGeoLocation(
  options?: GeoLocationOptions
): GeoLocationResult;

export default useGeoLocation;
